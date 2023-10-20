<script lang="ts">
	import { browser } from '$app/environment';
	import '../app.postcss';
	import superTokens from 'supertokens-web-js';
	import Session from 'supertokens-web-js/recipe/session';
	import ThirdPartyEmailPassword from 'supertokens-web-js/recipe/thirdpartyemailpassword';
	//initializing supertokens

	if (browser) {
		superTokens.init({
			appInfo: {
				apiDomain: 'http://localhost:5173',
				apiBasePath: '/api/auth',
				appName: 'sveltekit_supertoken'
			},
			recipeList: [Session.init(), ThirdPartyEmailPassword.init()]
		});
	}
</script>

<div class="w-screen h-screen">
	<slot />
</div>
