<script lang="ts">
	let { remaining, openChecklist } = $props<{
		remaining: number;
		openChecklist: () => void;
	}>();
</script>

<section class="mx-auto max-w-2xl px-2 py-2">
	<div class="rounded-3xl bg-gradient-to-br from-[#52C4C1] via-[#EBF1C8] to-[#BFDA6B] p-1 shadow-lg">
		<div class="rounded-[1.35rem] bg-white/95 p-5">
			<p class="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">Malle Strandfest</p>
			<h2 class="mt-2 text-3xl font-black leading-tight text-slate-950">Program 2026</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600">
				Find dagens program i menuen nederst. Under Husk kan du sætte flueben ved tilmeldinger
				og betalinger, så du har styr på det praktiske.
			</p>

			<button
				type="button"
				class="mt-5 flex w-full items-center justify-between rounded-2xl bg-[#52C4C1] px-4 py-3 text-left text-slate-950 shadow-sm active:scale-[0.99]"
				onclick={openChecklist}
			>
				<span>
					<span class="block text-sm font-bold">Åbn huskeliste</span>
					<span class="text-xs text-slate-950/70">{remaining} punkt{remaining === 1 ? '' : 'er'} mangler</span>
				</span>
				<span class="rounded-full bg-white px-3 py-1 text-sm font-black text-[#189A96] ring-1 ring-[#52C4C1]/40">{remaining}</span>
			</button>

			<div class="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
				<h3 class="text-sm font-black text-slate-950">Tilføj til hjemmeskærm</h3>
				<div class="mt-2 grid gap-2 text-xs leading-snug text-slate-600 sm:grid-cols-2">
					<div class="rounded-xl bg-white p-2 shadow-sm">
						<img src="/guide-ios-home-screen.svg" alt="iPhone: Safari del-menu med Føj til hjemmeskærm markeret" class="mb-2 h-auto w-full rounded-lg" loading="lazy" />
						<p><b>iPhone:</b> Åbn i Safari, tryk Del, vælg “Føj til hjemmeskærm”.</p>
					</div>
					<div class="rounded-xl bg-white p-2 shadow-sm">
						<img src="/guide-android-home-screen.svg" alt="Android: Chrome menu med Føj til startskærm markeret" class="mb-2 h-auto w-full rounded-lg" loading="lazy" />
						<p><b>Android:</b> Åbn i Chrome, tryk ⋮, vælg “Føj til startskærm”.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
