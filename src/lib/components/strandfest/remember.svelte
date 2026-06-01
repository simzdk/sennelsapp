<script lang="ts">
	import { onMount } from 'svelte';

	const storageKey = 'malle-strandfest-2026-husk';
	const items = [
		{
			id: 'child-party-payment',
			title: 'Tilmeld børnefest',
			detail: 'MobilePay 30 kr. til 5930RK. Husk barnets navn og klasse.',
			due: 'Senest 14/6'
		},
		{
			id: 'buffet-brunch-registration',
			title: 'Tilmeld aftenspisning eller brunch',
			detail: 'Kontakt Helle Kilsgaard: 61 74 45 12 eller fam.kilsgaard@gmail.com.',
			due: 'Anbefales før festen'
		},
		{
			id: 'pig-roast-payment',
			title: 'Betal grisefest',
			detail: 'MobilePay 250 kr. pr. person til 666235.',
			due: 'Ved tilmelding'
		},
		{
			id: 'pig-roast-written-registration',
			title: 'Skriftlig tilmelding til grisefest',
			detail: 'Betaling via MobilePay er ikke nok. Husk også skriftlig tilmelding til Helle.',
			due: 'Ved tilmelding'
		},
		{
			id: 'coffee-basket',
			title: 'Pak kaffekurv til torsdag',
			detail: 'Baren er åben, og man må gerne medbringe egen kaffekurv.',
			due: 'Torsdag 18/6'
		},
		{
			id: 'foam-party-clothes',
			title: 'Tag tørt tøj med til skumparty',
			detail: 'Børne-skumparty på stranden med musik og kæmpe skumanlæg.',
			due: 'Lørdag 20/6 kl. 14:00'
		},
		{
			id: 'brunch-ticket',
			title: 'Køb brunchbilletter ved indgangen',
			detail: 'Brunch koster 130 kr. Børn under 8 år halv pris. Tilmelding tilrådes.',
			due: 'Søndag 21/6'
		},
		{
			id: 'cake-table-cash',
			title: 'Husk kagebord',
			detail: 'Stort kagebord i teltet til 40 kr. inkl. kaffe.',
			due: 'Tirsdag 23/6 kl. 19:30'
		}
	];

	let checked = $state<Record<string, boolean>>({});

	const completed = $derived(items.filter((item) => checked[item.id]).length);
	const remaining = $derived(items.length - completed);

	onMount(() => {
		const saved = localStorage.getItem(storageKey);
		if (saved) checked = JSON.parse(saved);
	});

	function toggle(id: string) {
		checked = { ...checked, [id]: !checked[id] };
		localStorage.setItem(storageKey, JSON.stringify(checked));
	}

	function reset() {
		checked = {};
		localStorage.removeItem(storageKey);
	}
</script>

<section class="mx-auto max-w-2xl px-3 pb-8">
	<div class="overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-amber-400 to-cyan-400 p-1 shadow-xl">
		<div class="rounded-[1.35rem] bg-white/95 p-5">
			<p class="text-sm font-semibold uppercase tracking-wide text-orange-700">Malle Strandfest 2026</p>
			<div class="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<h2 class="text-3xl font-black tracking-tight text-slate-950">Huskeliste</h2>
					<p class="mt-1 text-sm text-slate-600">Sæt flueben, når praktikken er klaret.</p>
				</div>
				<div class="rounded-2xl bg-slate-950 px-5 py-3 text-center text-white">
					<div class="text-4xl font-black">{remaining}</div>
					<div class="text-xs uppercase tracking-wide text-white/70">mangler</div>
				</div>
			</div>
			<div class="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
				<div
					class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all"
					style={`width: ${(completed / items.length) * 100}%`}
				></div>
			</div>
			<p class="mt-2 text-sm font-medium text-slate-700">{completed} af {items.length} punkter klaret</p>
		</div>
	</div>

	<div class="mt-4 grid gap-3">
		{#each items as item}
			<button
				type="button"
				class={`rounded-2xl border p-4 text-left shadow-sm transition active:scale-[0.99] ${
					checked[item.id]
						? 'border-emerald-200 bg-emerald-50 text-slate-500'
						: 'border-slate-200 bg-white text-slate-950 hover:border-orange-300'
				}`}
				onclick={() => toggle(item.id)}
			>
				<div class="flex gap-3">
					<div
						class={`mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border-2 text-sm font-black ${
							checked[item.id]
								? 'border-emerald-500 bg-emerald-500 text-white'
								: 'border-orange-400 text-orange-500'
						}`}
					>
						{checked[item.id] ? '✓' : ''}
					</div>
					<div>
						<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
							<h3 class={`text-lg font-bold ${checked[item.id] ? 'line-through' : ''}`}>{item.title}</h3>
							<span class="w-fit rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800">
								{item.due}
							</span>
						</div>
						<p class="mt-1 text-sm leading-relaxed text-slate-600">{item.detail}</p>
					</div>
				</div>
			</button>
		{/each}
	</div>

	{#if completed > 0}
		<button class="mx-auto mt-5 block rounded-full px-4 py-2 text-sm font-semibold text-slate-500 underline" type="button" onclick={reset}>
			Nulstil huskeliste
		</button>
	{/if}
</section>
