function refreshContent(node, parent) {
	parent.innerHTML = '';
	if (node && node instanceof Node) {
		parent.appendChild(node);
		return;
	}

	if (!node.every(element => element instanceof Node)) {
		throw new Error("Array must contain instancs of Node");
	}

	for (let n of node) {
		parent.appendChild(n);
	}
}

export function TabViews({ parent, views, observable }) {
	if (!parent || !(parent instanceof Node)) {
		throw new Error("Invalid element, parent must be an HTML Node");
	}

	if (!views || !(views instanceof Array)) {
		throw new Error("Invalid views, type must be an array");
	}

	observable.subscribe((value) => {
		if (views.length < value + 1) {
			throw new Error("Views out of bounds")
		}

		refreshContent(views[value], parent);
	});

	refreshContent(views[2], parent);

	return parent;
}
