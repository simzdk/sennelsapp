<script lang="ts">
	import * as Table from '$lib/components/ui/table';  
</script>

<h1 class="my-5 flex w-full max-w-sm flex-col items-center justify-center gap-6 text-2xl font-bold">General Information</h1>
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