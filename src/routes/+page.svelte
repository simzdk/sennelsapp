<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import * as Tabs from '$lib/components/ui/tabs';
	import { checklistItems, checklistStorageKey } from '$lib/strandfestChecklist';
	import Wednesday from '$lib/components/strandfest/wednesday.svelte';
	import Thursday from '$lib/components/strandfest/thursday.svelte';
	import Friday from '$lib/components/strandfest/friday.svelte';
	import Saturday from '$lib/components/strandfest/saturday.svelte';
	import Sunday from '$lib/components/strandfest/sunday.svelte';
	import Tuesday from '$lib/components/strandfest/tuesday.svelte';
	import Landing from '$lib/components/strandfest/landing.svelte';
	import Remember from '$lib/components/strandfest/remember.svelte';

	let today = new Date();
	let { form } = $props();
	let appValue = $state<'menu' | 'strandfest' | 'feedback'>('menu');
	let dayValue = $state('home');
	let checked = $state<Record<string, boolean>>({});
	let feedbackTypes = $state<string[]>([]);
	let showFeedbackFormAgain = $state(false);

	const completed = $derived(checklistItems.filter((item) => checked[item.id]).length);
	const remaining = $derived(checklistItems.length - completed);

	$effect(() => {
		if (!browser) return;
		const nav = navigator as Navigator & {
			setAppBadge?: (contents?: number) => Promise<void>;
			clearAppBadge?: () => Promise<void>;
		};

		if (remaining > 0 && nav.setAppBadge) {
			nav.setAppBadge(remaining).catch(() => {});
		} else if (remaining === 0 && nav.clearAppBadge) {
			nav.clearAppBadge().catch(() => {});
		}
	});

	const currentFestivalDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

	if (currentFestivalDate === '2026-6-17') {
		dayValue = 'wednesday';
	} else if (currentFestivalDate === '2026-6-18') {
		dayValue = 'thursday';
	} else if (currentFestivalDate === '2026-6-19') {
		dayValue = 'friday';
	} else if (currentFestivalDate === '2026-6-20') {
		dayValue = 'saturday';
	} else if (currentFestivalDate === '2026-6-21') {
		dayValue = 'sunday';
	} else if (currentFestivalDate === '2026-6-23') {
		dayValue = 'tuesday';
	}

	onMount(() => {
		const saved = localStorage.getItem(checklistStorageKey);
		if (saved) checked = JSON.parse(saved);
	});

	function toggleChecklistItem(id: string) {
		checked = { ...checked, [id]: !checked[id] };
		localStorage.setItem(checklistStorageKey, JSON.stringify(checked));
	}

	function resetChecklist() {
		checked = {};
		localStorage.removeItem(checklistStorageKey);
	}

	function openChecklist() {
		appValue = 'strandfest';
		dayValue = 'remember';
	}

	function openStrandfest() {
		appValue = 'strandfest';
	}

	function openFeedback() {
		appValue = 'feedback';
		showFeedbackFormAgain = false;
	}

	function giveMoreFeedback() {
		showFeedbackFormAgain = true;
		feedbackTypes = [];
	}

	function toggleFeedbackType(type: string) {
		feedbackTypes = feedbackTypes.includes(type)
			? feedbackTypes.filter((selectedType) => selectedType !== type)
			: [...feedbackTypes, type];
	}

	$effect(() => {
		if (form?.feedbackSuccess) {
			appValue = 'feedback';
			feedbackTypes = [];
		}
	});
</script>

<div class="min-h-dvh bg-gradient-to-b from-orange-50 via-white to-cyan-50 px-2 pb-20 pt-1">
	<header class="mx-auto max-w-4xl px-3 pt-2 text-center">
		{#if appValue === 'strandfest'}
			<p class="text-sm font-bold uppercase tracking-[0.25em] text-orange-700">17. - 23. juni 2026</p>
			<h1 class="mt-2 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Malle Strandfest</h1>
		{/if}
	</header>

	{#if appValue === 'menu'}
		<main class="mx-auto mt-5 max-w-3xl px-3">
			<div class="overflow-hidden rounded-3xl bg-gradient-to-br from-[#52C4C1] via-[#EBF1C8] to-[#BFDA6B] p-1 shadow-lg">
				<div class="rounded-[1.35rem] bg-white/95 p-5 sm:p-7">
					<p class="text-sm font-bold uppercase tracking-[0.22em] text-[#C77D39]">Vælg app</p>
					<h2 class="mt-2 text-3xl font-black leading-tight text-slate-950">Hvad vil du åbne?</h2>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">Program, huskeliste og feedback samlet ét sted.</p>

					<div class="mt-6 grid grid-cols-2 gap-2 sm:gap-3">
						<button
							type="button"
							class="group flex min-h-56 flex-col rounded-3xl bg-[#E1F4F5] p-3 text-left ring-1 ring-[#52C4C1]/35 transition hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99] sm:min-h-64 sm:p-5"
							onclick={openStrandfest}
						>
							<span class="flex size-12 items-center justify-center rounded-2xl bg-[#189A96] text-2xl shadow-sm sm:size-14 sm:text-3xl">📅</span>
							<span class="mt-4 block text-lg font-black leading-tight text-slate-950 sm:text-2xl">Malle Strandfest</span>
							<span class="mt-2 block flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm">Se programmet og din huskeliste.</span>
							<span class="mt-4 inline-flex w-fit rounded-full bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-[#189A96] ring-1 ring-[#52C4C1]/30 sm:px-3 sm:text-xs">Åbn program</span>
						</button>

						<button
							type="button"
							class="group flex min-h-56 flex-col rounded-3xl bg-[#FFF4E7] p-3 text-left ring-1 ring-[#C77D39]/25 transition hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99] sm:min-h-64 sm:p-5"
							onclick={openFeedback}
						>
							<span class="flex size-12 items-center justify-center rounded-2xl bg-[#C77D39] text-2xl shadow-sm sm:size-14 sm:text-3xl">💬</span>
							<span class="mt-4 block text-lg font-black leading-tight text-slate-950 sm:text-2xl">Feedback</span>
							<span class="mt-2 block flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm">Fortæl hvad der virker eller kan blive bedre.</span>
							<span class="mt-4 inline-flex w-fit rounded-full bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-[#C77D39] ring-1 ring-[#C77D39]/25 sm:px-3 sm:text-xs">Giv feedback</span>
						</button>
					</div>
				</div>
			</div>
		</main>
	{:else if appValue === 'feedback'}
		<main class="mx-auto mt-5 max-w-2xl px-3">
			<button type="button" class="mb-3 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#189A96] ring-1 ring-[#52C4C1]/30" onclick={() => (appValue = 'menu')}>← Tilbage til menu</button>
			<div class="overflow-hidden rounded-3xl bg-gradient-to-br from-[#52C4C1] via-[#EBF1C8] to-[#BFDA6B] p-1 shadow-lg">
				{#if form?.feedbackSuccess && !showFeedbackFormAgain}
					<section class="rounded-[1.35rem] bg-white/95 p-6 text-center sm:p-8">
						<div class="mx-auto flex size-16 items-center justify-center rounded-3xl bg-[#E1F4F5] text-4xl ring-1 ring-[#52C4C1]/35">✓</div>
						<p class="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-[#C77D39]">Feedback sendt</p>
						<h2 class="mt-2 text-3xl font-black leading-tight text-slate-950">Tak for din feedback!</h2>
						<p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-700">
							Din feedback hjælper med at sikre, at vi får en endnu bedre Malle Strandfest næste år.
						</p>
						{#if form?.sentAt}
							<p class="mt-4 inline-flex rounded-full bg-[#E1F4F5] px-3 py-1 text-xs font-black text-[#189A96] ring-1 ring-[#52C4C1]/30">Sendt kl. {form.sentAt}</p>
						{/if}
						<button type="button" class="mt-6 w-full rounded-2xl bg-[#189A96] px-5 py-4 text-base font-black text-white shadow-sm transition hover:bg-[#137f7b] active:scale-[0.99]" onclick={giveMoreFeedback}>Giv mere feedback</button>
					</section>
				{:else}
				<form method="POST" action="?/feedback" class="rounded-[1.35rem] bg-white/95 p-5 sm:p-7">
					<p class="text-sm font-bold uppercase tracking-[0.22em] text-[#C77D39]">Feedback</p>
					<h2 class="mt-2 text-3xl font-black leading-tight text-slate-950">Hvad synes du om Malle Strandfest?</h2>
					<p class="mt-3 text-sm leading-relaxed text-slate-600">Er der noget, der kan gøres bedre næste år? Din besked hjælper os med at gøre festen endnu bedre.</p>

					{#if form?.feedbackError}
						<div class="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700 ring-1 ring-red-100">{form.feedbackError}</div>
					{/if}

					<div class="mt-5 grid gap-3 sm:grid-cols-2">
						<label class="grid gap-1 text-sm font-bold text-slate-700">
							<span class="whitespace-nowrap">Navn <span class="font-normal text-slate-400">(valgfri)</span></span>
							<input class="rounded-2xl border-slate-200 bg-white px-4 py-3 text-base text-slate-950 shadow-sm focus:border-[#52C4C1] focus:ring-[#52C4C1]" name="name" autocomplete="name" value={form?.name ?? ''} />
						</label>
						<label class="grid gap-1 text-sm font-bold text-slate-700">
							<span class="whitespace-nowrap">Email <span class="font-normal text-slate-400">(valgfri)</span></span>
							<input
								class="rounded-2xl border-slate-200 bg-white px-4 py-3 text-base text-slate-950 shadow-sm focus:border-[#52C4C1] focus:ring-[#52C4C1]"
								name="email"
								type="email"
								autocomplete="email"
								inputmode="email"
								value={form?.email ?? ''}
								oninput={(event) => event.currentTarget.setCustomValidity('')}
								oninvalid={(event) => event.currentTarget.setCustomValidity('Skriv venligst en gyldig emailadresse.')}
							/>
						</label>
					</div>

					<fieldset class="mt-5">
						<legend class="text-sm font-bold text-slate-700">Vælg en eller flere typer</legend>
						{#if feedbackTypes.length === 0}
							<p class="mt-1 text-xs font-bold text-slate-500">Du skal vælge mindst én type før du kan sende.</p>
						{/if}
						<div class="mt-2 grid grid-cols-3 gap-2">
							<label class={feedbackTypes.includes('good') ? 'relative cursor-pointer rounded-2xl bg-[#189A96] p-2 text-center text-white shadow-lg ring-2 ring-[#0f6f6b] transition sm:p-3' : 'relative cursor-pointer rounded-2xl bg-[#D9F2F1] p-2 text-center text-[#126f6b] ring-2 ring-[#52C4C1]/40 transition sm:p-3'}>
								<input class="sr-only" type="checkbox" name="type" value="good" checked={feedbackTypes.includes('good')} onchange={() => toggleFeedbackType('good')} />
								{#if feedbackTypes.includes('good')}
									<span class="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-white text-sm font-black text-[#189A96] shadow-sm ring-2 ring-white/70">✓</span>
								{/if}
								<span class="block text-xl sm:text-2xl">🎉</span>
								<span class="mt-1 block text-xs font-black sm:text-base">Godt!</span>
							</label>
							<label class={feedbackTypes.includes('improvement') ? 'relative cursor-pointer rounded-2xl bg-[#C77D39] p-2 text-center text-white shadow-lg ring-2 ring-[#8d5727] transition sm:p-3' : 'relative cursor-pointer rounded-2xl bg-[#FFE8CC] p-2 text-center text-[#9d612c] ring-2 ring-[#C77D39]/35 transition sm:p-3'}>
								<input class="sr-only" type="checkbox" name="type" value="improvement" checked={feedbackTypes.includes('improvement')} onchange={() => toggleFeedbackType('improvement')} />
								{#if feedbackTypes.includes('improvement')}
									<span class="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-white text-sm font-black text-[#C77D39] shadow-sm ring-2 ring-white/70">✓</span>
								{/if}
								<span class="block text-xl sm:text-2xl">🛠️</span>
								<span class="mt-1 block text-xs font-black sm:text-base">Forbedring</span>
							</label>
							<label class={feedbackTypes.includes('suggestion') ? 'relative cursor-pointer rounded-2xl bg-[#6B8F1A] p-2 text-center text-white shadow-lg ring-2 ring-[#476013] transition sm:p-3' : 'relative cursor-pointer rounded-2xl bg-[#EAF4C2] p-2 text-center text-[#527014] ring-2 ring-[#6B8F1A]/35 transition sm:p-3'}>
								<input class="sr-only" type="checkbox" name="type" value="suggestion" checked={feedbackTypes.includes('suggestion')} onchange={() => toggleFeedbackType('suggestion')} />
								{#if feedbackTypes.includes('suggestion')}
									<span class="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-white text-sm font-black text-[#6B8F1A] shadow-sm ring-2 ring-white/70">✓</span>
								{/if}
								<span class="block text-xl sm:text-2xl">💡</span>
								<span class="mt-1 block text-xs font-black sm:text-base">Forslag</span>
							</label>
						</div>
					</fieldset>

					<label class="mt-5 grid gap-1 text-sm font-bold text-slate-700">
						Kommentar
						<textarea class="min-h-36 rounded-2xl border-slate-200 bg-white px-4 py-3 text-base text-slate-950 shadow-sm focus:border-[#52C4C1] focus:ring-[#52C4C1]" name="comment" required placeholder="Skriv din mening her...">{form?.comment ?? ''}</textarea>
					</label>

					<button type="submit" disabled={feedbackTypes.length === 0} class="mt-5 w-full rounded-2xl bg-[#189A96] px-5 py-4 text-base font-black text-white shadow-sm transition hover:bg-[#137f7b] active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none">Send</button>
				</form>
				{/if}
			</div>
		</main>
	{:else}
	<Tabs.Root bind:value={dayValue}>
		<button type="button" class="mx-auto mt-4 block rounded-full bg-white px-4 py-2 text-sm font-bold text-[#189A96] ring-1 ring-[#52C4C1]/30" onclick={() => (appValue = 'menu')}>← Tilbage til menu</button>
		<div class="mx-auto mt-3 w-full max-w-3xl rounded-3xl bg-white/85 p-3 shadow-sm ring-1 ring-black/5 xl:max-w-3xl">
			<Tabs.Content value="home">
				<Landing {remaining} openChecklist={openChecklist} />
			</Tabs.Content>
			<Tabs.Content value="wednesday">
				<Wednesday />
			</Tabs.Content>
			<Tabs.Content value="thursday">
				<Thursday />
			</Tabs.Content>
			<Tabs.Content value="friday">
				<Friday />
			</Tabs.Content>
			<Tabs.Content value="saturday">
				<Saturday />
			</Tabs.Content>
			<Tabs.Content value="sunday">
				<Sunday />
			</Tabs.Content>
			<Tabs.Content value="tuesday">
				<Tuesday />
			</Tabs.Content>
			<Tabs.Content value="remember">
				<Remember {checked} {completed} {remaining} toggle={toggleChecklistItem} reset={resetChecklist} />
			</Tabs.Content>
		</div>
		<div class="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur">
			<Tabs.List class="grid h-auto w-full grid-cols-8 gap-1 rounded-none bg-transparent p-0">
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl bg-amber-50 px-1 text-[10px] leading-tight text-amber-950 data-[state=active]:bg-amber-500 data-[state=active]:ring-amber-200" value="home"><span>Info</span><span>2026</span></Tabs.Trigger>
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl px-1 text-[10px] leading-tight" value="wednesday"><span>Ons</span><span>17/6</span></Tabs.Trigger>
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl px-1 text-[10px] leading-tight" value="thursday"><span>Tor</span><span>18/6</span></Tabs.Trigger>
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl px-1 text-[10px] leading-tight" value="friday"><span>Fre</span><span>19/6</span></Tabs.Trigger>
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl px-1 text-[10px] leading-tight" value="saturday"><span>Lør</span><span>20/6</span></Tabs.Trigger>
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl px-1 text-[10px] leading-tight" value="sunday"><span>Søn</span><span>21/6</span></Tabs.Trigger>
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl px-1 text-[10px] leading-tight" value="tuesday"><span>Tir</span><span>23/6</span></Tabs.Trigger>
				<Tabs.Trigger class="relative h-12 min-w-0 flex-col rounded-xl bg-amber-100 px-1 text-[10px] leading-tight text-amber-900 data-[state=active]:bg-amber-500 data-[state=active]:ring-amber-200" value="remember">
					<span>Husk</span>
					<span class="mt-0.5 rounded-full bg-white px-1.5 py-0.5 text-[9px] font-black text-amber-700 ring-1 ring-amber-200">{remaining}</span>
				</Tabs.Trigger>
			</Tabs.List>
		</div>
	</Tabs.Root>
	{/if}
</div>
