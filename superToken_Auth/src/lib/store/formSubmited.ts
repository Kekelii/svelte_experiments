import { writable, type Writable } from 'svelte/store';

const formSubmitted: Writable<boolean> = writable(false);

export default formSubmitted;
