import { createPairedElement, createUnpairedElement } from "./factory";

export function Button({ child, children, attributes = {} }) {
	return createPairedElement({ element: "button", child, children, attributes })
}

export function TextInput(attributes = {}) {
	return createUnpairedElement({ element: "input", attributes });
}

