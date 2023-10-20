import { writable, type Writable } from 'svelte/store';

const loginState: Writable<boolean> = writable(true);

export default loginState;
