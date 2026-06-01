<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import Icon_time from '$lib/components/icons/icon_time.svelte';
</script>
<Table.Root>
    <Table.Header>
        <Table.Row class="bg-gray-100 text-secondary-foreground">
            <Table.Head class="w-[75px]">
                <div class="flex justify-center items-center w-full h-full">
                    <Icon_time/>
                </div>
            </Table.Head>
            <Table.Head>Beskrivelse</Table.Head>
        </Table.Row>
    </Table.Header>
    <Table.Body>
        <Table.Row>
            <Table.Cell class="font-medium text-center">
                18:00
            </Table.Cell>
            <Table.Cell>
                Grillteltet åbner.<br/>
            </Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell class="font-medium text-center">18:30</Table.Cell>
            <Table.Cell>
                <p class="whitespace-normal">
                    <b>Båltaler: Nicolai Møller(I), Formand for Social- og Seniorudvalget</b><br/>
                    Kåring af årets Sennels-bo ✨
                </p>
            </Table.Cell>
        </Table.Row>        
        <Table.Row>
            <Table.Cell class="font-medium text-center">19:00</Table.Cell>
            <Table.Cell>
                <b>Skt. Hans-bålet tændes og ”heksen” brændes.</b><br/>
                
            </Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell class="font-medium text-center">19:30</Table.Cell>
            <Table.Cell>
                <b>Stort kagebord 🍰</b><br/>
                Det store kagebord i teltet til 40 kr. inkl. kaffe ☕
            </Table.Cell>
        </Table.Row>                
        <Table.Row>
            <Table.Cell class="font-medium text-center">21:00</Table.Cell>
            <Table.Cell>
                Tak for i år 💗
            </Table.Cell>
        </Table.Row>                
    </Table.Body>
</Table.Root>
