<script lang="ts">
	import { onMount } from 'svelte';
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
	let dayValue = $state('home');
	let checked = $state<Record<string, boolean>>({});

	const completed = $derived(checklistItems.filter((item) => checked[item.id]).length);
	const remaining = $derived(checklistItems.length - completed);

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
		dayValue = 'remember';
	}
</script>

<div class="min-h-screen bg-gradient-to-b from-orange-50 via-white to-cyan-50 px-2 pb-24 pt-3">
	<header class="mx-auto max-w-4xl px-3 pt-2 text-center">
		<p class="text-sm font-bold uppercase tracking-[0.25em] text-orange-700">17. - 23. juni 2026</p>
		<h1 class="mt-2 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Malle Strandfest</h1>
	</header>
	<Tabs.Root bind:value={dayValue}>
		<div class="mx-auto mt-5 w-full max-w-3xl rounded-3xl bg-white/85 p-3 shadow-sm ring-1 ring-black/5 xl:max-w-3xl">
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
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl px-1 text-[10px] leading-tight" value="home"><span>Info</span><span>2026</span></Tabs.Trigger>
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl px-1 text-[10px] leading-tight" value="wednesday"><span>Ons</span><span>17/6</span></Tabs.Trigger>
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl px-1 text-[10px] leading-tight" value="thursday"><span>Tor</span><span>18/6</span></Tabs.Trigger>
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl px-1 text-[10px] leading-tight" value="friday"><span>Fre</span><span>19/6</span></Tabs.Trigger>
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl px-1 text-[10px] leading-tight" value="saturday"><span>Lør</span><span>20/6</span></Tabs.Trigger>
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl px-1 text-[10px] leading-tight" value="sunday"><span>Søn</span><span>21/6</span></Tabs.Trigger>
				<Tabs.Trigger class="h-12 min-w-0 flex-col rounded-xl px-1 text-[10px] leading-tight" value="tuesday"><span>Tir</span><span>23/6</span></Tabs.Trigger>
				<Tabs.Trigger class="relative h-12 min-w-0 flex-col rounded-xl bg-amber-100 px-1 text-[10px] leading-tight text-amber-900" value="remember">
					<span>Husk</span>
					<span class="mt-0.5 rounded-full bg-slate-950 px-1.5 py-0.5 text-[9px] font-black text-white">{remaining}</span>
				</Tabs.Trigger>
			</Tabs.List>
		</div>
	</Tabs.Root>
</div>
