<script lang="ts">
	import type { Action } from '@sveltejs/kit';

	$: message = 'message';
	let alert: Element;

	const Counttimer: Action = (node) => {
		setTimeout(() => {
			console.log(alert);
		}, 50000);
	};
	function removeAlet() {}
	export const showAlert = function (message: string) {
		console.log(message);
		message = message;
	};
</script>

<div bind:this={alert} use:Counttimer class="h-full card card-hover p-4 bg-tertiary-400 flex">
	<div class="w-5/6 h-full m-1 text-red-200 text-center">{message}</div>
	<button on:click={removeAlet} class="w-1/6 border rounded">X</button>
</div>
