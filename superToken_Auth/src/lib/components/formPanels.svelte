<script lang="ts">
	import formSubmitted from '$lib/store/formSubmited';
	import loginState from '$lib/store/panelState';
	import Forms from './forms.svelte';
	import ProcessErrorCardfrom from './processErrorCard.svelte';
	import SocialSignin from './socialSignin.svelte';

	let changePanel: () => void;
	let disableForms: () => void;

	function changeState() {
		if ($formSubmitted) return;
		changePanel();
		if ($loginState) {
			loginState.set(false);
			return;
		}
		loginState.set(true);
	}
</script>

<div
	class="md:w-4/6 md:border flex flex-col flex-1 rounded-md p-2 md:p-5 border-tertiary-500 md:justify-between"
>
	<div
		class="heading h-1/6 flex flex-col border-t-0 border-l-0 border-r-0 border border-tertiary-300/50"
	>
		{#if $loginState}
			<h3 class="h1 text-center w-full">Sign In</h3>
			<p class="h6 text-center antialiased text-surface-500 mb-2">
				You don't have an account ?<button on:click={changeState} class="anchor text-tertiary-500"
					>Signup</button
				>
			</p>
		{/if}
		{#if !$loginState}
			<h3 class="h1 text-center w-full">Sign Up</h3>
			<p class="h6 text-center antialiased text-surface-500 mb-2">
				Already have an account ?<button on:click={changeState} class="anchor text-tertiary-500"
					>Signin</button
				>
			</p>
		{/if}
	</div>
	<!-- forms  -->
	<div class="form h-3/5 flex p-1 overflow-x-hidden">
		<Forms bind:changePanel bind:disableForms />
	</div>
	<!-- alert  -->
	<div class="h-1/6 p-1">
		<ProcessErrorCardfrom />
	</div>
	<div class="flex items-center justify-between text-surface-500">
		<hr class="w-2/5" />
		<p class="text-tertiary-500">Or</p>
		<hr class="w-2/5" />
	</div>
	<!-- thirdparty  -->
	<div
		class="thirdparty h-1/6 p-2 overflow-x-scroll border border-y-0 border-tertiary-500 flex flex-col"
	>
		<p class="text-center h-1/2 text-surface-500 flex-none">Sign in with</p>

		<SocialSignin {disableForms} />

		<div />
	</div>
</div>
