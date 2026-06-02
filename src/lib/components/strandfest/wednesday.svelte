<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import Icon_time from '$lib/components/icons/icon_time.svelte';
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
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
			<Table.Cell class="text-center font-medium">
				19:00<br />
				|<br />
				22:00
			</Table.Cell>
			<Table.Cell>
				<p class="whitespace-normal">
					<b>Præmie-whist i forsamlingshuset</b><br />
					BEMÆRK! Afholdes i forsamlingshuset.
				</p>
			</Table.Cell>
		</Table.Row>
	</Table.Body>
</Table.Root>
