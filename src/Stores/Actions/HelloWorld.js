import { SAY_HELLO_WORLD } from "../types";

export const sayHelloWorld = (payload) => ({
	type: SAY_HELLO_WORLD,
	payload
})