function Book(props) {
	this.title = props.title;
	this.author = props.author;
	this.pages = props.pages;
	this.isRead = props.isRead;
	this.thumbnail = props.thumbnail;
}

function newCard(book, id) {
	function getThumbnail(url) {
		if (url) {
			return `
				<img src="${url}" alt="" class="thumbnail">
			`
		}

		return `
			<div class="thumbnail">
				<i class="fa-solid fa-book"></i>
			</div>
		`
	}
	return `
				<div class="card" id="${id}">
					${getThumbnail(book.thumbnail)}
					<div class="title">
						<p class="">${book.title}</p>
						<i class="fa-solid fa-circle-check ${book.isRead ? 'isRead' : 'isNotRead'}"></i>
					</div>
					<p class="author">${book.author}</p>
					<div class="footer">
						<span>${book.pages} pages</span>
						<button>
							<i class="fa-solid fa-trash-can"></i>
						</button>
					</div>
				</div>
		`;
}

function addBookToLibrary(book, node) {
	const booksGrid = document.querySelector('#books_grid');
	booksGrid.innerHTML += node;
	books.push(book);
}


function loadAllBooks() {
	const booksGrid = document.querySelector('#books_grid');


	books.forEach((book, index) => {
		const card = newCard(book, book.title.toLowerCase().split(" ").join("-"));

		booksGrid.innerHTML += card;
	})
}


const books = [
	new Book({ title: 'Book 1', author: 'Author 1', pages: 50, isRead: false, thumbnail: "" }),
	new Book({ title: 'Book 2', author: 'Author 2', pages: 100, isRead: true, thumbnail: "" }),
];

const form = document.getElementById('form');

function handleSubmit(event) {
	event.preventDefault();

	let formData = new FormData(event.target);
	const formProps = Object.fromEntries(formData);

	const book = new Book(formProps);
	const card = newCard(book, book.title.toLowerCase().split(" ").join("-"));

	addBookToLibrary(book, card);
}
form.addEventListener('submit', handleSubmit);
