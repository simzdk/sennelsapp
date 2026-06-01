<script lang="ts">
	import { checklistItems } from '$lib/strandfestChecklist';

	let { checked, completed, remaining, toggle, reset } = $props<{
		checked: Record<string, boolean>;
		completed: number;
		remaining: number;
		toggle: (id: string) => void;
		reset: () => void;
	}>();
</script>

<section class="mx-auto max-w-2xl px-3 pb-8">
	<div class="overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-amber-400 to-cyan-400 p-1 shadow-xl">
		<div class="rounded-[1.35rem] bg-white/95 p-5">
			<p class="text-sm font-semibold uppercase tracking-wide text-orange-700">Malle Strandfest 2026</p>
			<div class="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<h2 class="text-3xl font-black tracking-tight text-slate-950">Huskeliste</h2>
					<p class="mt-1 text-sm text-slate-600">Sæt flueben, når praktikken er klaret.</p>
				</div>
				<div class="rounded-2xl bg-slate-950 px-5 py-3 text-center text-white">
					<div class="text-4xl font-black">{remaining}</div>
					<div class="text-xs uppercase tracking-wide text-white/70">mangler</div>
				</div>
			</div>
			<div class="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
				<div
					class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all"
					style={`width: ${(completed / checklistItems.length) * 100}%`}
				></div>
			</div>
			<p class="mt-2 text-sm font-medium text-slate-700">{completed} af {checklistItems.length} punkter klaret</p>
		</div>
	</div>

	<div class="mt-4 grid gap-3">
		{#each checklistItems as item}
			<button
				type="button"
				class={`rounded-2xl border p-4 text-left shadow-sm transition active:scale-[0.99] ${
					checked[item.id]
						? 'border-emerald-200 bg-emerald-50 text-slate-500'
						: 'border-slate-200 bg-white text-slate-950 hover:border-orange-300'
				}`}
				onclick={() => toggle(item.id)}
			>
				<div class="flex gap-3">
					<div
						class={`mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border-2 text-sm font-black ${
							checked[item.id]
								? 'border-emerald-500 bg-emerald-500 text-white'
								: 'border-orange-400 text-orange-500'
						}`}
					>
						{checked[item.id] ? '✓' : ''}
					</div>
					<div>
						<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
							<h3 class={`text-lg font-bold ${checked[item.id] ? 'line-through' : ''}`}>{item.title}</h3>
							<span class="w-fit rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800">
								{item.due}
							</span>
						</div>
						<p class="mt-1 text-sm leading-relaxed text-slate-600">{item.detail}</p>
					</div>
				</div>
			</button>
		{/each}
	</div>

	{#if completed > 0}
		<button class="mx-auto mt-5 block rounded-full px-4 py-2 text-sm font-semibold text-slate-500 underline" type="button" onclick={reset}>
			Nulstil huskeliste
		</button>
	{/if}
</section>
