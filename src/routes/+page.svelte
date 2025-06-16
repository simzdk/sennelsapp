<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
</script>

<div class="mx-auto my-5 flex w-full max-w-sm flex-col items-center justify-center gap-6">
	<Tabs.Root value="friday">
		<Tabs.List>
			<Tabs.Trigger value="friday">Fredag 20/6</Tabs.Trigger>
			<Tabs.Trigger value="saturday">Lørdag 21/6</Tabs.Trigger>
			<Tabs.Trigger value="sunday">Søndag 22/6</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="friday"></Tabs.Content>
		<Tabs.Content value="saturday"></Tabs.Content>
		<Tabs.Content value="sunday"></Tabs.Content>
	</Tabs.Root>
</div>
