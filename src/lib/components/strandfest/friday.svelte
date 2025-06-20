<script lang="ts">
	import * as Table from '$lib/components/ui/table';
    import Icon_time from '$lib/components/icons/icon_time.svelte';
</script>
<div class="wrap-break-word">
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
                1600<br>
                |<br/>
                1800</Table.Cell>
            <Table.Cell>
                <b>Børnefest</b><br/>
                Fest inkl. børnedrinks fra baren og snacks.<br/> 
                Fra 0. - 6 klasse. <br/> 
                Pris: 30 kr. <br/> 
                Tilmelding påkrævet. Se nedenfor. <br/> 
            </Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell class="font-medium text-center">1830</Table.Cell>
            <Table.Cell>
                <p class="whitespace-normal">
                    <b>Fællesspisning</b><br/>
                    Boller i karry - Pris 65 kr pr person. Børn under 3 år gratis.<br/> 
                    (Bestil gerne hos Helle.)<br/>
                    Festpladsen åbner med hoppeborg, karrusel, tombola, pølser, is, slikvogn, grilltelt og det store øltelt.<br/>
                </p>
            </Table.Cell>
        </Table.Row>        
        <Table.Row>
            <Table.Cell class="font-medium text-center">1930</Table.Cell>
            <Table.Cell>
                <p class="whitespace-normal">
                    <b>⭐ for en aften</b><br/>
                    Lokale Sennelsboere går på scenen og giver et nummer.<br/>
                </p>
            </Table.Cell>
        </Table.Row>             
        <Table.Row>
            <Table.Cell class="font-medium text-center">2200</Table.Cell>
            <Table.Cell>
                <p class="whitespace-normal">
                    <b>🎵 Jam Band Joggling 🎵</b><br/>
                    En gang om året vækkes Jam Band Joggling til live, og det skal man ikke få glip af. Vi ses i teltet. <br/>
                </p>
            </Table.Cell>
        </Table.Row>                     
        <Table.Row>
            <Table.Cell class="font-medium text-center">0100</Table.Cell>
            <Table.Cell>
                Tak for i dag. 
            </Table.Cell>
        </Table.Row>                     
    </Table.Body>
</Table.Root>
</div>
