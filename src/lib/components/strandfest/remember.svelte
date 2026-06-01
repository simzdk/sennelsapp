<script lang="ts">
	import { checklistItems } from '$lib/strandfestChecklist';

	let { checked, completed, remaining, toggle, reset } = $props<{
		checked: Record<string, boolean>;
		completed: number;
		remaining: number;
		toggle: (id: string) => void;
		reset: () => void;
	}>();

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
</script>

<section class="mx-auto max-w-2xl px-1 pb-4">
    <div class="rounded-2xl border border-amber-200 bg-amber-50/80 px-3 py-2">
        <div class="flex items-center justify-between gap-3">
            <div>
                <h2 class="text-xl font-black tracking-tight text-slate-950">Huskeliste</h2>
                <p class="text-xs text-slate-600">{completed} af {checklistItems.length} klaret</p>
            </div>
            <div class="flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 text-white">
                <span class="text-2xl font-black leading-none">{remaining}</span>
                <span class="text-[10px] font-bold uppercase tracking-wide text-white/70">mangler</span>
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
            <button
                type="button"
                class={`rounded-2xl border px-3 py-2 text-left shadow-sm transition active:scale-[0.99] ${
                    checked[item.id]
                        ? 'border-emerald-200 bg-emerald-50 text-slate-500'
                        : 'border-slate-200 bg-white text-slate-950 hover:border-orange-300'
                }`}
                onclick={() => toggle(item.id)}
            >
                <div class="flex gap-2.5">
                    <div
                        class={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-black ${
                            checked[item.id]
                                ? 'border-emerald-500 bg-emerald-500 text-white'
                                : 'border-orange-400 text-orange-500'
						}`}
					>
						{checked[item.id] ? '✓' : ''}
                    </div>
                    <div>
                        <div class="flex items-start justify-between gap-2">
                            <h3 class={`text-sm font-bold leading-tight ${checked[item.id] ? 'line-through' : ''}`}>{item.title}</h3>
                            <span class="w-fit shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
                                {item.deadline ? daysUntil(item.deadline) : item.due}
                            </span>
                        </div>
                        <p class="mt-0.5 text-xs leading-snug text-slate-600">{item.detail}</p>
                    </div>
                </div>
            </button>
        {/each}
    </div>

    {#if completed > 0}
        <button class="mx-auto mt-3 block rounded-full px-3 py-1 text-xs font-semibold text-slate-500 underline" type="button" onclick={reset}>
            Nulstil huskeliste
        </button>
    {/if}
</section>
