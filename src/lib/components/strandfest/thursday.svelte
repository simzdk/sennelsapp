<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import Icon_time from '$lib/components/icons/icon_time.svelte';
</script>

<Table.Root>
	<Table.Header>
		<Table.Row class="bg-gray-100 text-secondary-foreground">
			<Table.Head class="w-[75px]">
				<div class="flex h-full w-full items-center justify-center">
					<Icon_time />
				</div>
			</Table.Head>
			<Table.Head>Beskrivelse</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		<Table.Row>
			<Table.Cell class="text-center font-medium">19:00</Table.Cell>
			<Table.Cell>
				<p class="whitespace-normal">
					<b>Mød op ved teltet, fælles gå/cykeltur</b><br />
					Fælles gåtur med stiudvalget, Mona Kyndi<br />
					Cykeltur, Thomas Møller<br />
					Kreaklubben er i teltet, alle nysgerrige er velkommen<br />
					Baren er åben, medbring gerne egen kaffekurv
				</p>
			</Table.Cell>
		</Table.Row>
		<Table.Row>
			<Table.Cell class="text-center font-medium">23:30</Table.Cell>
			<Table.Cell>Tak for i dag.</Table.Cell>
		</Table.Row>
	</Table.Body>
</Table.Root>
