<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import Wednesday from '$lib/components/strandfest/wednesday.svelte';
	import Thursday from '$lib/components/strandfest/thursday.svelte';
	import Friday from '$lib/components/strandfest/friday.svelte';
	import Saturday from '$lib/components/strandfest/saturday.svelte';
	import Sunday from '$lib/components/strandfest/sunday.svelte';
	import Monday from '$lib/components/strandfest/monday.svelte';

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
		dayValue = 'monday';
	} else {
		dayValue = 'friday';
	}
</script>

<div>
    <Tabs.Root value={dayValue}>
        <div class="mx-auto my-5 flex flex-col items-center justify-center gap-6 md:max-w-3xl">
            <Tabs.List class="h-auto flex-wrap gap-1">
                <Tabs.Trigger class="h-8" value="wednesday">Onsdag 17/6</Tabs.Trigger>
                <Tabs.Trigger class="h-8" value="thursday">Torsdag 18/6</Tabs.Trigger>
                <Tabs.Trigger class="h-8" value="friday">Fredag 19/6</Tabs.Trigger>
                <Tabs.Trigger class="h-8" value="saturday">Lørdag 20/6</Tabs.Trigger>
                <Tabs.Trigger class="h-8" value="sunday">Søndag 21/6</Tabs.Trigger>
                <Tabs.Trigger class="h-8" value="monday">Tirsdag 23/6</Tabs.Trigger>
            </Tabs.List>
        </div>
        <div class="w-full xl:w-1/2 mx-auto">
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
            <Tabs.Content value="monday">
                <Monday />
            </Tabs.Content>
        </div>        
    </Tabs.Root>
</div>
