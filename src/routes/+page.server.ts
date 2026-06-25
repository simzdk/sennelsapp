import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const feedbackRecipient = 'mail@simonamby.dk';
const feedbackSender = 'Sennels App <mail@simonamby.dk>';

const feedbackTypes = {
	good: {
		label: 'Godt!',
		emoji: '🎉',
		color: '#189A96',
		background: '#E1F4F5'
	},
	improvement: {
		label: 'Forbedring',
		emoji: '🛠️',
		color: '#C77D39',
		background: '#FFF4E7'
	},
	suggestion: {
		label: 'Forslag',
		emoji: '💡',
		color: '#6B8F1A',
		background: '#F3F8DC'
	}
} as const;

type FeedbackType = keyof typeof feedbackTypes;

function escapeHtml(value: string) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#039;')
		.replaceAll('\n', '<br>');
}

export const actions = {
	feedback: async ({ request, fetch }) => {
		const data = await request.formData();
		const name = String(data.get('name') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const type = String(data.get('type') ?? '') as FeedbackType;
		const comment = String(data.get('comment') ?? '').trim();

		if (!(type in feedbackTypes)) {
			return fail(400, { feedbackError: 'Vælg venligst en type feedback.', name, email, comment });
		}

		if (!comment) {
			return fail(400, { feedbackError: 'Skriv venligst en kommentar.', name, email, type });
		}

		if (!env.SMTP2GO_API_KEY) {
			console.error('SMTP2GO_API_KEY is missing from runtime environment');
			return fail(500, { feedbackError: 'Feedback kan ikke sendes endnu. SMTP2GO mangler opsætning.', name, email, type, comment });
		}

		console.info('SMTP2GO_API_KEY is present in runtime environment');

		const selectedType = feedbackTypes[type];
		const html = `
			<div style="margin:0;background:#ecfeff;padding:28px;font-family:Arial,sans-serif;color:#0f172a;">
				<div style="max-width:620px;margin:0 auto;border-radius:28px;background:linear-gradient(135deg,#52C4C1,#EBF1C8,#BFDA6B);padding:4px;box-shadow:0 16px 40px rgba(15,23,42,.12);">
					<div style="border-radius:24px;background:rgba(255,255,255,.96);padding:28px;">
						<p style="margin:0 0 8px;font-size:12px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:#C77D39;">Sennels App</p>
						<h1 style="margin:0 0 18px;font-size:30px;line-height:1.1;color:#020617;">Ny feedback</h1>
						<div style="display:inline-block;border-radius:999px;background:${selectedType.background};border:1px solid ${selectedType.color};padding:10px 16px;color:${selectedType.color};font-size:18px;font-weight:900;">
							${selectedType.emoji} ${selectedType.label}
						</div>
						<div style="margin-top:22px;border-radius:20px;background:#f8fafc;padding:18px;border:1px solid #e2e8f0;">
							<p style="margin:0 0 6px;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#64748b;">Kommentar</p>
							<p style="margin:0;font-size:16px;line-height:1.6;color:#0f172a;">${escapeHtml(comment)}</p>
						</div>
						<div style="margin-top:18px;border-radius:20px;background:#E1F4F5;padding:16px;border:1px solid rgba(82,196,193,.45);">
							<p style="margin:0 0 8px;font-size:13px;color:#334155;"><strong>Navn:</strong> ${name ? escapeHtml(name) : 'Ikke oplyst'}</p>
							<p style="margin:0;font-size:13px;color:#334155;"><strong>Email:</strong> ${email ? escapeHtml(email) : 'Ikke oplyst'}</p>
						</div>
					</div>
				</div>
			</div>`;

		let response: Response;
		let responseText = '';

		try {
			response = await fetch('https://api.smtp2go.com/v3/email/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-Smtp2go-Api-Key': env.SMTP2GO_API_KEY
				},
				body: JSON.stringify({
					sender: feedbackSender,
					to: [feedbackRecipient],
					subject: `Sennels App feedback: ${selectedType.label}`,
					html_body: html,
					text_body: `Ny feedback: ${selectedType.label}\n\nNavn: ${name || 'Ikke oplyst'}\nEmail: ${email || 'Ikke oplyst'}\n\n${comment}`,
					custom_headers: email ? [{ header: 'Reply-To', value: email }] : undefined
				})
			});
			responseText = await response.text();
		} catch (error) {
			console.error('SMTP2GO feedback request failed', error);
			return fail(502, { feedbackError: 'Feedback kunne ikke sendes lige nu. Prøv igen senere.', name, email, type, comment });
		}

		if (!response.ok) {
			console.error('SMTP2GO feedback response failed', {
				status: response.status,
				statusText: response.statusText,
				body: responseText
			});
			return fail(502, { feedbackError: 'Feedback kunne ikke sendes lige nu. Prøv igen senere.', name, email, type, comment });
		}

		console.info('SMTP2GO feedback sent', { status: response.status, recipient: feedbackRecipient, type });

		return { feedbackSuccess: true };
	}
};
