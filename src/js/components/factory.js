export function attachChildren({ parent, children = [] }) {
	children.forEach((child, index) => {
		if (!child) {
			throw new Error("Invalid node type");
		}

		if (typeof child === 'string') {
			const textNode = document.createTextNode(child);
			parent.appendChild(textNode);
		} else if (child.nodeType === Node.ELEMENT_NODE) {
			parent.appendChild(child);
		} else {
			throw new Error(`Invalid node type at index ${index}`);
		}
	});

	return parent;
}

export function createElement({ element, attributes = {} }) {
	if (!element) {
		throw new Error('Element type is required');
	}
	const component = document.createElement(element);

	for (let key in attributes) {
		if (!attributes.hasOwnProperty(key)) continue;

		component.setAttribute(key, attributes[key]);
	}

	return component;
}


export function createPairedElement({ element, child = null, children = null, attributes = {} }) {
	let component = createElement({ element, attributes });
	if (child && children) {
		throw new Error("An element cannot have both child and children at the same time.");
	}
	if (child) {
		if (typeof child === 'string') {
			const textNode = document.createTextNode(child);
			component.appendChild(textNode);
		} else {
			component.appendChild(child);
		}
	}
	if (children) {
		component = attachChildren({ parent: component, children });
	}

	return component;
}


export function createUnpairedElement({ element, attributes = {} }) {
	return createElement({ element, attributes });
}
