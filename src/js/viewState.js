function createViewIndex(index) {
	const subscribers = new Set();

	function subscribe(subscriber) {
		subscribers.add(subscriber);
	}

	function update(updater) {
		set(updater(index));
	}

	function set(value) {
		index = value;
		subscribers.forEach(subscriber => subscriber(index));
	}

	return {
		subscribe,
		update,
		set,
	}
}

export const currentViewIndex = createViewIndex(0);
