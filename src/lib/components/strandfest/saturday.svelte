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
            <Table.Cell class="font-medium text-center">1300</Table.Cell>
            <Table.Cell>
                <p class="whitespace-normal">
                    <b>Loppemarked / Bagagerumssalg</b><br/>
                    Alle private kan deltage.<br/>
                    Festpladsen åbner med alle aktiviteer 🎉<br/>
                </p>
            </Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell class="font-medium text-center">1330</Table.Cell>
            <Table.Cell>
                <p class="whitespace-normal">
                    <b>HØSGU Teknikholdet</b><br/>
                    Springglade børn 3-7 Klasse laver opvisning, hvis vejret tillader det 🌞 ☔<br/>
                </p>
            </Table.Cell>
        </Table.Row>        
        <Table.Row>
            <Table.Cell class="font-medium text-center">1430</Table.Cell>
            <Table.Cell>
                <p class="whitespace-normal">
                    <b>Børne-Skumparty</b><br/>
                    Skumparty på stranden med musik og kæmpe skum-anlæg. Husk tørt tøj.<br/>
                </p>
            </Table.Cell>
        </Table.Row>        
        <Table.Row>
            <Table.Cell class="font-medium text-center">1830</Table.Cell>
            <Table.Cell>
                <p class="whitespace-normal">
                    <b>Grisefest 🐷</b><br/>
                    Helstegt gris med tilbehør fra "Den Gamle Slagter"<br/>
                    Pris 250 kr. Betaling skal ske via MobilePay ved tilmelding.<br/>
                    MobilePay Nr: 666235<br/>
                    Husk også skriftlig tilmelding ved til Helle.<br/>
                    Betaling via MobilePay er ikke nok<br/><br/>
                    Cocktailbar<br/>
                    Musik & Dans<br/>
                </p>
            </Table.Cell>
        </Table.Row>             
        <Table.Row>
            <Table.Cell class="font-medium text-center">0130</Table.Cell>
            <Table.Cell>
                Tak for i dag. 
            </Table.Cell>
        </Table.Row>                     
    </Table.Body>
</Table.Root>