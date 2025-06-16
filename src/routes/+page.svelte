<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Table from '$lib/components/ui/table';  
	import Information from '$lib/components/icons/Information.svelte';
</script>

<div class="mx-auto my-5 flex w-full max-w-sm flex-col items-center justify-center gap-6">
	<Tabs.Root value="friday">
		<Tabs.List>
			<Tabs.Trigger value="friday">Fredag 20/6</Tabs.Trigger>
			<Tabs.Trigger value="saturday">Lørdag 21/6</Tabs.Trigger>
			<Tabs.Trigger value="sunday">Søndag 22/6</Tabs.Trigger>
            <Tabs.Trigger value="info"><Information /></Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="friday">
            <h1 class="my-5 flex w-full max-w-sm flex-col items-center justify-center gap-6 text-2xl font-bold">Fredag 20/6</h1>
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-[100px]">Invoice</Table.Head>
						<Table.Head>Status</Table.Head>
						<Table.Head>Method</Table.Head>
						<Table.Head class="text-right">Amount</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell class="font-medium">INV001</Table.Cell>
						<Table.Cell>Paid</Table.Cell>
						<Table.Cell>Credit Card</Table.Cell>
						<Table.Cell class="text-right">$250.00</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table.Root>
		</Tabs.Content>
		<Tabs.Content value="saturday"></Tabs.Content>
		<Tabs.Content value="sunday"></Tabs.Content>
	</Tabs.Root>
</div>
