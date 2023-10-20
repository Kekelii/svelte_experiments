<script lang="ts">
	import formSubmitted from '$lib/store/formSubmited';
	import loginState from '$lib/store/panelState';
	import {
		emailPasswordSignIn,
		emailPasswordSignUp
	} from 'supertokens-web-js/recipe/thirdpartyemailpassword';

	let signinPanel: HTMLFormElement;
	let signupPanel: HTMLFormElement;

	export const changePanel = function () {
		if ($loginState) {
			signupPanel.scrollIntoView({ behavior: 'smooth' });
			return;
		}
		signinPanel.scrollIntoView({ behavior: 'smooth' });
	};

	export const disableForms = function () {
		// signinForm.setAttribute('disabled', 'true');
		// signupForm.setAttribute('disabled', 'true');
	};
</script>

<!-- sign in form  -->
<form
	bind:this={signinPanel}
	on:submit|preventDefault={async () => {
		formSubmitted.set(true);
		const data = new FormData(signinPanel);
		let email = data.get('email');
		let password = data.get('password');

		if (typeof email === 'string' && typeof password === 'string') {
			try {
				const signinRequest = await emailPasswordSignIn({
					formFields: [
						{
							id: 'email',
							value: email
						},
						{
							id: 'password',
							value: password
						}
					]
				});
				if ((signinRequest.status = 'OK')) {
					console.log('login successfull');
				}
			} catch (error) {
				console.log(error);
			}
		}
	}}
	class=" h-full w-full flex-none mr-8"
>
	<label for="Email">Email Address</label>
	<input
		name="email"
		class="mt-3 p-3 w-full h-14 placeholder:text-center font-semibold text-lg rounded bg-transparent border border-surface-500"
		type="text"
		placeholder="exampleofmailaddress@email.com"
		required
	/>
	<label for="Email">Password</label>
	<input
		name="password"
		class="mt-3 w-full h-14 p-3 rounded bg-transparent border border-surface-500"
		type="password"
		minlength="6"
		required
	/>
	{#if $formSubmitted}
		<button class="mt-3 w-full h-14 flex justify-center pt-1 variant-filled-tertiary rounded"
			><span class="loader border" />
		</button>
	{:else}
		<input
			value="Sign In"
			type="submit"
			class="mt-3 w-full cursor-pointer text-center h-14 variant-filled-tertiary rounded text-primary-50"
		/>
	{/if}
</form>
<!-- signup form  -->
<form
	bind:this={signupPanel}
	on:submit|preventDefault={async () => {
		formSubmitted.set(true);
		const data = new FormData(signupPanel);
		const email = data.get('email');
		const password = data.get('password');
		const confirmPassword = data.get('confirmPassword');
		if (typeof password === 'string' && typeof email === 'string' && password === confirmPassword) {
			try {
				const signupRequest = await emailPasswordSignUp({
					formFields: [
						{
							id: 'email',
							value: email
						},
						{
							id: 'password',
							value: password
						}
					]
				});
				if ((signupRequest.status = 'OK')) {
					console.log('login successfull');
				}
			} catch (error) {
				console.log(error);
			}
		}
	}}
	class=" h-full w-full flex-none"
>
	<label for="Email">Email Address</label>
	<input
		name="email"
		class="mt-2 p-3 w-full h-12 placeholder:text-center font-semibold text-lg rounded bg-transparent border border-surface-500"
		type="text"
		placeholder="exampleofmailaddress@email.com"
		required
	/>
	<label for="Email">Password</label>
	<input
		name="password"
		class="mt-2 w-full p-3 h-12 rounded bg-transparent border border-surface-500"
		type="password"
		minlength="6"
		required
	/>
	<label for="Email">Confirm Password</label>
	<input
		name="confirmPassword"
		class="mt-2 p-3 w-full h-12 rounded bg-transparent border border-surface-500"
		type="password"
		minlength="6"
		required
	/>

	{#if $formSubmitted}
		<button class="mt-3 w-full h-14 flex justify-center pt-1 variant-filled-tertiary rounded"
			><span class="loader border" />
		</button>
	{:else}
		<input
			value="Sign In"
			type="submit"
			class="mt-3 w-full cursor-pointer text-center h-14 variant-filled-tertiary rounded text-primary-50"
		/>
	{/if}
</form>

<style>
	.loader {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		position: relative;
		animation: rotate 1s linear infinite;
	}
	.loader::before {
		content: '';
		box-sizing: border-box;
		position: absolute;
		inset: 0px;
		border-radius: 50%;
		border: 5px solid #fff;
		animation: prixClipFix 2s linear infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes prixClipFix {
		0% {
			clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
		}
		25% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
		}
		50% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
		}
		75% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
		}
		100% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
		}
	}
</style>
