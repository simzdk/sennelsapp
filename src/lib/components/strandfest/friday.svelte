<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import Icon_time from '$lib/components/icons/icon_time.svelte';
</script>
<div class="wrap-break-word">
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
                15:45<br>
                |<br/>
                18:00</Table.Cell>
            <Table.Cell>
                <b>Børnefest</b><br/>
                Fest inkl. børnedrinks fra baren og snacks.<br/> 
                Fra 0. - 6. klasse. <br/>
                Pris: 30 kr. <br/> 
                Tilmelding påkrævet. Se nedenfor. <br/> 
            </Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell class="font-medium text-center">18:30</Table.Cell>
            <Table.Cell>
                <p class="whitespace-normal">
                    <b>Fællesspisning</b><br/>
                    Mallegryde - Pris 75 kr. pr. pers. Børn under 3 år gratis.<br/>
                    (Bestil gerne hos Helle.)<br/>
                    Festpladsen åbner.<br/>
                </p>
            </Table.Cell>
        </Table.Row>        
        <Table.Row>
            <Table.Cell class="font-medium text-center">19:30</Table.Cell>
            <Table.Cell>
                <p class="whitespace-normal">
                    <b>Stjerne for en aften</b><br/>
                    Lokale Sennelsboere går på scenen og giver et nummer.<br/>
                </p>
            </Table.Cell>
        </Table.Row>             
        <Table.Row>
            <Table.Cell class="font-medium text-center">19:30</Table.Cell>
            <Table.Cell>
                <p class="whitespace-normal">
                    Jam Band Joggling spiller bar-musik.<br/>
                </p>
            </Table.Cell>
        </Table.Row>                     
        <Table.Row>
            <Table.Cell class="font-medium text-center">01:00</Table.Cell>
            <Table.Cell>
                Tak for i dag. 
            </Table.Cell>
        </Table.Row>                     
    </Table.Body>
</Table.Root>
</div>
