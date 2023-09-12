<script>
	import SigninForm from './signinForm.svelte';
	import SocialSignin from './socialSignin.svelte';
</script>

<div class="container border flex flex-col rounded-md p-5 border-surface-500 justify-between">
	<div
		class="heading h-1/6 flex flex-col border-t-0 border-l-0 border-r-0 border border-tertiary-300/50"
	>
		<h3 class="h1 text-center w-full">Sign In</h3>
		<p class="h6 text-center antialiased text-surface-500">
			You don't have an account ?<button class="anchor text-tertiary-500">Signup</button>
		</p>
	</div>
	<div class="form h-3/5">
		<SigninForm />
	</div>
	<div class="flex items-center justify-between text-surface-500">
		<hr class="w-2/5" />
		<p>Or</p>
		<hr class="w-2/5" />
	</div>
	<div class="thirdparty h-1/5 border border-y-0 border-tertiary-500 flex flex-col">
		<p class="text-center text-surface-500">Sign in with</p>
		<SocialSignin />
		<div />
	</div>
</div>

<style>
	.container {
		height: 85%;
		width: 60%;
	}
	.thirdparty {
		justify-content: space-evenly;
	}
</style>
