<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import Wednesday from '$lib/components/strandfest/wednesday.svelte';
	import Thursday from '$lib/components/strandfest/thursday.svelte';
	import Friday from '$lib/components/strandfest/friday.svelte';
	import Saturday from '$lib/components/strandfest/saturday.svelte';
	import Sunday from '$lib/components/strandfest/sunday.svelte';
	import Tuesday from '$lib/components/strandfest/tuesday.svelte';
	import Remember from '$lib/components/strandfest/remember.svelte';

	let today = new Date();
	let dayValue = 'friday';

	// Get the current day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
	const dayOfWeek = today.getDay();

	if (dayOfWeek === 3) {
		dayValue = 'wednesday';
	} else if (dayOfWeek === 4) {
		dayValue = 'thursday';
	} else if (dayOfWeek === 6) {
		dayValue = 'saturday';
	} else if (dayOfWeek === 0) {
		dayValue = 'sunday';
	} else if (dayOfWeek === 2) {
		dayValue = 'tuesday';
	} else {
		dayValue = 'friday';
	}
</script>

<div class="min-h-screen bg-gradient-to-b from-orange-50 via-white to-cyan-50 px-2 py-3">
	<header class="mx-auto max-w-4xl px-3 pt-2 text-center">
		<p class="text-sm font-bold uppercase tracking-[0.25em] text-orange-700">17. - 23. juni 2026</p>
		<h1 class="mt-2 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Malle Strandfest</h1>
		<p class="mx-auto mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
			Program, praktiske huskepunkter og hurtig dag-for-dag oversigt.
		</p>
	</header>
	<Tabs.Root value={dayValue}>
		<div class="sticky top-0 z-10 mx-auto my-5 flex max-w-4xl flex-col items-center justify-center gap-6 bg-gradient-to-b from-orange-50 via-orange-50/95 to-transparent px-1 py-2 backdrop-blur">
			<Tabs.List class="h-auto w-full justify-start gap-2 overflow-x-auto rounded-2xl bg-white/80 p-2 shadow-sm sm:flex-wrap sm:justify-center">
				<Tabs.Trigger class="h-11 min-w-fit rounded-xl px-4" value="wednesday">Ons 17/6</Tabs.Trigger>
				<Tabs.Trigger class="h-11 min-w-fit rounded-xl px-4" value="thursday">Tor 18/6</Tabs.Trigger>
				<Tabs.Trigger class="h-11 min-w-fit rounded-xl px-4" value="friday">Fre 19/6</Tabs.Trigger>
				<Tabs.Trigger class="h-11 min-w-fit rounded-xl px-4" value="saturday">Lør 20/6</Tabs.Trigger>
				<Tabs.Trigger class="h-11 min-w-fit rounded-xl px-4" value="sunday">Søn 21/6</Tabs.Trigger>
				<Tabs.Trigger class="h-11 min-w-fit rounded-xl px-4" value="tuesday">Tir 23/6</Tabs.Trigger>
				<Tabs.Trigger class="h-11 min-w-fit rounded-xl bg-amber-100 px-4 text-amber-900" value="remember">Husk</Tabs.Trigger>
			</Tabs.List>
		</div>
		<div class="mx-auto w-full max-w-3xl rounded-3xl bg-white/85 p-3 shadow-sm ring-1 ring-black/5 xl:max-w-3xl">
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
				<Remember />
			</Tabs.Content>
		</div>
	</Tabs.Root>
</div>
