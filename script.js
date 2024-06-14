function Book(props) {
	this.title = props.title;
	this.author = props.author;
	this.pages = props.pages;
	this.isRead = props.isRead;
	this.thumbnail = props.thumbnail;
}

function handleAddSubmit(event) {
	event.preventDefault();

	let formData = new FormData(event.target);
	const formProps = Object.fromEntries(formData);
	const book = new Book(formProps);
	add(book)
	event.target.reset();
}

function handleRemove(index) {
	remove(index);
}

function handleToggleIsRead(index) {
	update(index);
}

function loadAllBooks(books) {
	const booksGrid = document.querySelector('#books_grid');
	booksGrid.innerHTML = "";

	books.forEach((book, index) => {
		const card = newCard(book, index);
		booksGrid.innerHTML += card;
	})
}

const form = document.getElementById('form');
form.addEventListener('submit', handleAddSubmit);

window.onload = () => {
	loadAllBooks([])
	db.subscribe((data) => {
		loadAllBooks(data);
	})
}

