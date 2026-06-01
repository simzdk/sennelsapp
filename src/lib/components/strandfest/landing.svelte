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
				class="mt-5 flex w-full items-center justify-between rounded-2xl bg-cyan-600 px-4 py-3 text-left text-white shadow-sm active:scale-[0.99]"
				onclick={openChecklist}
			>
				<span>
					<span class="block text-sm font-bold">Åbn huskeliste</span>
					<span class="text-xs text-white/70">{remaining} punkt{remaining === 1 ? '' : 'er'} mangler</span>
				</span>
				<span class="rounded-full bg-white px-3 py-1 text-sm font-black text-cyan-700">{remaining}</span>
			</button>

			<div class="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
				<h3 class="text-sm font-black text-slate-950">Tilføj til hjemmeskærm</h3>
				<div class="mt-2 grid gap-2 text-xs leading-snug text-slate-600 sm:grid-cols-2">
					<p><b>iPhone:</b> Åbn i Safari, tryk Del, vælg “Føj til hjemmeskærm”.</p>
					<p><b>Android:</b> Åbn i Chrome, tryk ⋮, vælg “Føj til startskærm”.</p>
				</div>
			</div>
		</div>
	</div>
</section>
