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
                1030<br>
                ⬇<br/>
                1230
            </Table.Cell>
            <Table.Cell>
                <b>Brunchbord</b><br/>
                Stort lækkert brunchbord. Pris 130 kr. Børn u/8 år halv pris. <br/>
                Billetter købes ved indgangen. Tilmelding tilrådes.<br/>
                <br/>

                Festpladsen åbner med alle aktiviteer 🎉<br/>
            </Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell class="font-medium text-center">1430</Table.Cell>
            <Table.Cell>
                <b>Musik i teltet</b><br/>
                v/ Heskjær and the Hangovers<br/>
            </Table.Cell>
        </Table.Row>        
    </Table.Body>
</Table.Root>