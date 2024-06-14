function createDb(data) {
	const subscribers = [];

	function subscribe(subscriber) {
		subscribers.push(subscriber);
	}

	function update(updater) {
		set(updater(data));
	}

	function set(value) {
		data = value;
		subscribers.forEach(subscriber => subscriber(data));
	}

	return {
		subscribe,
		update,
		set,
	}
}

function add(book) {
	db.update((data) => {
		const old = data;
		old.push(book);
		return old;
	});
}

function update(index) {
	db.update((data) => {
		const old = data;
		const book = data[index];
		old.splice(index, 1, {
			...book,
			isRead: !book.isRead,
		});

		return old;
	})
}

function remove(index) {
	db.update((data) => {
		const old = data;
		old.splice(index, 1);

		return old;
	})
}

const db = createDb([]);
