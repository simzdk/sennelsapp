<script lang="ts">
	import { checklistItems } from '$lib/strandfestChecklist';

	let { checked, completed, remaining, toggle, reset } = $props<{
		checked: Record<string, boolean>;
		completed: number;
		remaining: number;
		toggle: (id: string) => void;
		reset: () => void;
	}>();

	let copiedValue = $state('');

	function daysUntil(deadline?: string) {
		if (!deadline) return '';

		const today = new Date();
		today.setHours(0, 0, 0, 0);

		const target = new Date(`${deadline}T00:00:00`);
		const days = Math.ceil((target.getTime() - today.getTime()) / 86400000);

		if (days < 0) return 'frist overskredet';
		if (days === 0) return 'sidste dag';
		if (days === 1) return '1 dag tilbage';
		return `${days} dage tilbage`;
	}

	async function copyValue(value: string) {
		await navigator.clipboard.writeText(value);
		copiedValue = value;
		setTimeout(() => {
			if (copiedValue === value) copiedValue = '';
		}, 1400);
	}
</script>

<section class="mx-auto max-w-2xl px-1 pb-4">
    <div class="rounded-2xl border border-amber-200 bg-stone-50 px-3 py-2">
        <div class="flex items-center justify-between gap-3">
            <div>
                <h2 class="text-xl font-black tracking-tight text-slate-950">Huskeliste</h2>
                <p class="text-xs text-slate-600">{completed} af {checklistItems.length} klaret</p>
            </div>
            <div class="flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1.5 text-amber-900 ring-1 ring-amber-200">
                <span class="text-2xl font-black leading-none">{remaining}</span>
                <span class="text-[10px] font-bold uppercase tracking-wide text-amber-700">mangler</span>
            </div>
        </div>
        <div class="mt-2 h-2 overflow-hidden rounded-full bg-white">
            <div
                class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all"
                style={`width: ${(completed / checklistItems.length) * 100}%`}
            ></div>
        </div>
    </div>

	<div class="mt-3 grid gap-2">
		{#each checklistItems as item}
			<div
				class={`rounded-2xl border px-3 py-2 text-left shadow-sm transition active:scale-[0.99] ${
					checked[item.id]
						? 'border-emerald-200 bg-emerald-50 text-slate-500'
						: item.deadline
							? 'border-amber-200 bg-amber-50 text-slate-950 hover:border-amber-300'
							: 'border-slate-200 bg-white text-slate-950 hover:border-amber-300'
				}`}
			>
                <div class="flex gap-2.5">
					<button
						type="button"
                        class={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-black ${
                            checked[item.id]
                                ? 'border-emerald-500 bg-emerald-500 text-white'
								: 'border-amber-400 text-amber-500'
						}`}
						onclick={() => toggle(item.id)}
						aria-label={`${checked[item.id] ? 'Fjern flueben fra' : 'Sæt flueben ved'} ${item.title}`}
					>
						{checked[item.id] ? '✓' : ''}
					</button>
					<div class="min-w-0 flex-1">
						<div class="grid grid-cols-[1fr_auto] items-start gap-2">
							<h3 class={`text-sm font-bold leading-tight ${checked[item.id] ? 'line-through' : ''}`}>{item.title}</h3>
							<div class="text-right">
								<span class={`inline-block w-fit shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold ${item.deadline ? 'bg-amber-200 text-amber-900' : 'bg-stone-100 text-stone-700'}`}>
									{item.deadline ? daysUntil(item.deadline) : item.due}
								</span>
								{#if item.deadline}
									<div class="mt-0.5 text-[10px] font-semibold text-slate-500">senest 14/6</div>
								{/if}
							</div>
						</div>
						<p class="mt-0.5 text-xs leading-snug text-slate-600">{item.detail}</p>
						{#if item.actions?.length}
							<div class="mt-2 flex flex-wrap gap-1.5">
								{#each item.actions as action}
									{#if action.href}
										<a class="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#189A96] ring-1 ring-[#52C4C1]/30" href={action.href}>
											{action.label}
										</a>
									{:else if action.value}
										<button class="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#189A96] ring-1 ring-[#52C4C1]/30" type="button" onclick={() => copyValue(action.value ?? '')}>
											{copiedValue === action.value ? 'Kopieret' : action.label}
										</button>
									{/if}
								{/each}
							</div>
						{/if}
					</div>
                </div>
			</div>
        {/each}
    </div>

    {#if completed > 0}
        <button class="mx-auto mt-3 block rounded-full px-3 py-1 text-xs font-semibold text-slate-500 underline" type="button" onclick={reset}>
            Nulstil huskeliste
        </button>
    {/if}
</section>
