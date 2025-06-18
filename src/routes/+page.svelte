<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';	
	import Information from '$lib/components/icons/Information.svelte';
    import Friday from '$lib/components/strandfest/friday.svelte';
	import Saturday from '$lib/components/strandfest/saturday.svelte';
    import Sunday from '$lib/components/strandfest/sunday.svelte';
    import Monday from '$lib/components/strandfest/monday.svelte';
    import InfoPage from '$lib/components/strandfest/infopage.svelte';
</script>

<div>
	<Tabs.Root value="friday">
        <div class="mx-auto my-5 flex flex-col items-center justify-center gap-6 md:max-w-sm">
            <Tabs.List>
                <Tabs.Trigger value="friday">Fredag 20/6</Tabs.Trigger>
                <Tabs.Trigger value="saturday">Lørdag 21/6</Tabs.Trigger>
                <Tabs.Trigger value="sunday">Søndag 22/6</Tabs.Trigger>
                <Tabs.Trigger value="monday">Mandag 23/6</Tabs.Trigger>
            </Tabs.List>
        </div>
        <div class="w-full xl:w-1/2 mx-auto">
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
