<script lang="ts">
    import * as Table from '$lib/components/ui/table';
    import Icon_time from '$lib/components/icons/icon_time.svelte';

    // 1. Schedule as array
    const schedule = [
        { time: 1300, displaytime: '13:00', desc: `<b>Loppemarked / Bagagerumssalg</b><br/>Alle private kan deltage.<br/>Festpladsen åbner med alle aktiviteer 🎉<br/>` },
        { time: 1330, displaytime: '13:30', desc: `<b>HØSGU Teknikholdet</b><br/>Springglade børn 3-7 Klasse laver opvisning, hvis vejret tillader det 🌞 ☔<br/>` },
        { time: 1430, displaytime: '14:30', desc: `<b>Børne-Skumparty</b><br/>Skumparty på stranden med musik og kæmpe skum-anlæg. Husk tørt tøj.<br/>` },
        { time: 1830, displaytime: '18:30–20:30', desc: `<b>Grisefest 🐷</b><br/>Helstegt gris med tilbehør fra "Den Gamle Slagter"<br/>Pris 250 kr. Betaling skal ske via MobilePay ved tilmelding.<br/>MobilePay Nr: 666235<br/>Husk også skriftlig tilmelding ved til Helle.<br/>Betaling via MobilePay er ikke nok<br/><br/>Cocktailbar<br/>Musik & Dans<br/>` },
        { time: 130,  displaytime: '01:30', desc: `Tak for i dag.` }
    ];

function normalizeTime(time: number): number {
    // If the time is before 5:00 AM, assume it's the next day
    return time < 500 ? time + 2400 : time;
}

function getCurrentHHMM(): number {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    const time = h * 100 + m;
    return normalizeTime(time);
}


    let nowHHMM = getCurrentHHMM();

    // 3. Find active row index
function getActiveIndex() {
    for (let i = 0; i < schedule.length; i++) {
        const thisTime = normalizeTime(schedule[i].time);
        const nextTime = normalizeTime(schedule[i + 1]?.time ?? 9999);

        if (nowHHMM >= thisTime && nowHHMM < nextTime) {
            return i;
        }
    }
    return -1;
}


    let activeIndex = getActiveIndex();

    // Optional: update every minute
    const interval = setInterval(() => {
        nowHHMM = getCurrentHHMM();
        activeIndex = getActiveIndex();
    }, 60000);

    // Cleanup
    import { onDestroy } from 'svelte';
    onDestroy(() => clearInterval(interval));
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
        {#each schedule as item, i}
            <Table.Row class={i === activeIndex ? 'bg-green-100' : ''}>
                <Table.Cell class="font-medium text-center">
                    {@html item.displaytime.includes('–')
                        ? item.displaytime.split('–')[0] + '<br/>|<br/>' + item.displaytime.split('–')[1]
                        : item.displaytime}
                    </Table.Cell>
                <Table.Cell>
                    <div class="whitespace-normal">{@html item.desc}</div>
                </Table.Cell>
            </Table.Row>
        {/each}
    </Table.Body>
</Table.Root>