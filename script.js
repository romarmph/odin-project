function Book(title, author, pages, isRead, thumbnail) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
	this.thumbnail = thumbnail;
}

function addBookToLibrary(book) {
	books.push(book);
}

function loadAllBooks() {
	const booksGrid = document.querySelector('#books_grid');

	function getThumbnail(url) {
		if (url) {
			return `
				<img src="https://thedailyaztec.com/wp-content/uploads/2021/04/image-900x900.jpeg" alt="" class="thumbnail">
			`
		}

		return `
			<div class="thumbnail">
				<i class="fa-solid fa-book"></i>
			</div>
		`
	}

	books.forEach(book => {
		const card = `
				<div class="card">
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

		booksGrid.innerHTML += card;
	})

	console.log(booksGrid);
}

function handleClick(event) {
	event.preventDefault();

	console.log(event);
}

const books = [
	new Book('Book 1', 'Author 1', 50, false),
	new Book('Book 2', 'Author 2', 100, true),
];


const button = document.getElementById("add_button");

button.addEventListener('click', handleClick);
