import { createPairedElement, createUnpairedElement, createElement } from "./factory";

export function P({ child, children, attributes = {} }) {
	return createPairedElement({ element: 'p', child, children, attributes });
}

export function Span({ child, children, attributes = {} }) {
	return createPairedElement({ element: 'span', child, children, attributes });
}

export function Label({ child, children, attributes = {} }) {
	return createPairedElement({ element: 'label', child, children, attributes });
}

export function H({ level = 1, child, children, attributes = {} }) {
	return createPairedElement({ element: `h${level}`, child, children, attributes });
}

export function Img(attributes = {}) {
	return createUnpairedElement({ element: 'img', attributes });
}
