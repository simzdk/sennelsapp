<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import Icon_time from '$lib/components/icons/icon_time.svelte';
</script>
<Table.Root>
    <Table.Header>
        <Table.Row>
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
                 10:30<br>
                |<br/>
                12:30
            </Table.Cell>
            <Table.Cell>
                <p class="whitespace-normal">
                    <b>Brunchbord</b><br/>
                    Stort lækkert brunchbord. Pris 130 kr. Børn u/8 år halv pris. <br/>
                    Billetter købes ved indgangen. Tilmelding tilrådes.<br/>
                    <br/>

                    Festpladsen åbner med alle aktiviteter.<br/>
                </p>
            </Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell class="font-medium text-center">14:30</Table.Cell>
            <Table.Cell>
                <b>Musik i teltet</b><br/>
                v/ Heskjær and the hangovers<br/>
            </Table.Cell>
        </Table.Row>        
    </Table.Body>
</Table.Root>
