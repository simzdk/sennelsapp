<script lang="ts">
	let { remaining, openChecklist } = $props<{
		remaining: number;
		openChecklist: () => void;
	}>();
</script>

<section class="mx-auto max-w-2xl px-2 py-2">
	<div class="rounded-3xl bg-gradient-to-br from-[#52C4C1] via-[#EBF1C8] to-[#BFDA6B] p-1 shadow-lg">
		<div class="rounded-[1.35rem] bg-white/95 p-5">
			<p class="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">Malle Strandfest</p>
			<h2 class="mt-2 text-3xl font-black leading-tight text-slate-950">Program 2026</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600">
				Find dagens program i menuen nederst. Under Husk kan du sætte flueben ved tilmeldinger
				og betalinger, så du har styr på det praktiske.
			</p>

			<button
				type="button"
				class="mt-5 flex w-full items-center justify-between rounded-2xl bg-[#52C4C1] px-4 py-3 text-left text-slate-950 shadow-sm active:scale-[0.99]"
				onclick={openChecklist}
			>
				<span>
					<span class="block text-sm font-bold">Åbn huskeliste</span>
					<span class="text-xs text-slate-950/70">{remaining} punkt{remaining === 1 ? '' : 'er'} mangler</span>
				</span>
				<span class="rounded-full bg-white px-3 py-1 text-sm font-black text-[#189A96] ring-1 ring-[#52C4C1]/40">{remaining}</span>
			</button>

			<div class="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
				<h3 class="text-sm font-black text-slate-950">Tilføj til hjemmeskærm</h3>
				<div class="mt-2 grid gap-2 text-xs leading-snug text-slate-600 sm:grid-cols-2">
					<div class="rounded-xl bg-white p-2 shadow-sm">
						<svg viewBox="0 0 180 92" class="mb-2 h-20 w-full rounded-lg bg-sky-50" role="img" aria-label="iPhone guide">
							<rect x="56" y="8" width="68" height="76" rx="10" fill="#0f172a" />
							<rect x="60" y="14" width="60" height="64" rx="6" fill="#fff7ed" />
							<rect x="70" y="23" width="40" height="6" rx="3" fill="#f97316" />
							<rect x="74" y="62" width="32" height="9" rx="4" fill="#0891b2" />
							<path d="M90 37v18m0-18l-7 7m7-7l7 7" stroke="#0f172a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
							<circle cx="128" cy="31" r="13" fill="#0891b2" />
							<path d="M123 31h10m-5-5v10" stroke="white" stroke-width="3" stroke-linecap="round" />
						</svg>
						<p><b>iPhone:</b> Åbn i Safari, tryk Del, vælg “Føj til hjemmeskærm”.</p>
					</div>
					<div class="rounded-xl bg-white p-2 shadow-sm">
						<svg viewBox="0 0 180 92" class="mb-2 h-20 w-full rounded-lg bg-emerald-50" role="img" aria-label="Android guide">
							<rect x="56" y="8" width="68" height="76" rx="10" fill="#14532d" />
							<rect x="60" y="14" width="60" height="64" rx="6" fill="#f0fdf4" />
							<circle cx="110" cy="25" r="3" fill="#14532d" />
							<circle cx="110" cy="36" r="3" fill="#14532d" />
							<circle cx="110" cy="47" r="3" fill="#14532d" />
							<rect x="71" y="57" width="38" height="12" rx="5" fill="#16a34a" />
							<circle cx="128" cy="31" r="13" fill="#16a34a" />
							<path d="M123 31h10m-5-5v10" stroke="white" stroke-width="3" stroke-linecap="round" />
						</svg>
						<p><b>Android:</b> Åbn i Chrome, tryk ⋮, vælg “Føj til startskærm”.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
