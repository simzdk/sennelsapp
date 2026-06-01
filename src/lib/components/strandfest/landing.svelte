<script lang="ts">
	let { remaining, openChecklist } = $props<{
		remaining: number;
		openChecklist: () => void;
	}>();
</script>

<section class="mx-auto max-w-2xl px-2 py-2">
	<div class="overflow-hidden rounded-3xl bg-gradient-to-br from-[#52C4C1] via-[#EBF1C8] to-[#BFDA6B] p-1 shadow-lg">
		<div class="relative rounded-[1.35rem] bg-white/95 p-5">
			<div class="absolute -right-12 -top-14 size-36 rounded-full bg-[#52C4C1]/20"></div>
			<div class="absolute -bottom-16 -left-10 size-32 rounded-full bg-[#BFDA6B]/25"></div>

			<div class="relative">
				<h2 class="text-3xl font-black leading-tight text-slate-950">Program 2026</h2>
				<p class="mt-3 text-sm leading-relaxed text-slate-600">
					Alt det vigtigste samlet ét sted: dagens program, praktiske tider og din personlige
					huskeliste til tilmelding og betaling.
				</p>

				<div class="mt-4 grid grid-cols-2 gap-2 text-center">
					<div class="rounded-2xl bg-[#EBF1C8]/70 px-2 py-3 ring-1 ring-[#BFDA6B]/40">
						<div class="text-lg font-black text-slate-950">6</div>
						<div class="text-[10px] font-bold uppercase tracking-wide text-slate-600">festdage</div>
					</div>
					<div class="rounded-2xl bg-[#52C4C1]/15 px-2 py-3 ring-1 ring-[#52C4C1]/30">
						<div class="text-lg font-black text-slate-950">30+</div>
						<div class="text-[10px] font-bold uppercase tracking-wide text-slate-600">programpunkter</div>
					</div>
				</div>

				<button
					type="button"
					class="mt-5 flex w-full items-center justify-between rounded-2xl bg-[#189A96] px-4 py-3 text-left text-white shadow-sm transition active:scale-[0.99]"
					onclick={openChecklist}
				>
					<span>
						<span class="block text-sm font-bold">Åbn huskeliste</span>
						<span class="text-xs text-white/75">{remaining} punkt{remaining === 1 ? '' : 'er'} mangler</span>
					</span>
					<span class="rounded-full bg-white px-3 py-1 text-sm font-black text-[#189A96]">{remaining}</span>
				</button>
			</div>
		</div>
	</div>
</section>
