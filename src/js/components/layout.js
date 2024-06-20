import { createPairedElement } from "./factory";

export function Div({ child, children, attributes = {} }) {
	return createPairedElement({ element: 'div', child, children, attributes });
}

export function Main({ child, children, attributes = {} }) {
	return createPairedElement({ element: 'main', child, children, attributes });
}

export function Header({ child, children, attributes = {} }) {
	return createPairedElement({ element: 'header', child, children, attributes });
}

export function Nav({ child, children, attributes = {} }) {
	return createPairedElement({ element: 'nav', child, children, attributes });
}

