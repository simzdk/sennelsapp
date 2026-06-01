<script lang="ts">
	let { remaining, openChecklist } = $props<{
		remaining: number;
		openChecklist: () => void;
	}>();
</script>

<section class="mx-auto max-w-2xl px-2 py-2">
	<div class="rounded-3xl bg-gradient-to-br from-orange-500 via-amber-300 to-cyan-400 p-1 shadow-lg">
		<div class="rounded-[1.35rem] bg-white/95 p-5">
			<p class="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">Malle Strandfest</p>
			<h2 class="mt-2 text-3xl font-black leading-tight text-slate-950">Program 2026</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600">
				Find dagens program i menuen nederst. Under Husk kan du sætte flueben ved tilmeldinger
				og betalinger, så du har styr på det praktiske.
			</p>

			<button
				type="button"
				class="mt-5 flex w-full items-center justify-between rounded-2xl bg-slate-950 px-4 py-3 text-left text-white shadow-sm active:scale-[0.99]"
				onclick={openChecklist}
			>
				<span>
					<span class="block text-sm font-bold">Åbn huskeliste</span>
					<span class="text-xs text-white/70">{remaining} punkt{remaining === 1 ? '' : 'er'} mangler</span>
				</span>
				<span class="rounded-full bg-white px-3 py-1 text-sm font-black text-slate-950">{remaining}</span>
			</button>
		</div>
	</div>
</section>
