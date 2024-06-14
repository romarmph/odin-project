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
						<button id="toggle__button" onclick="handleToggleIsRead(${id})">
							<i class="fa-solid fa-circle-check ${book.isRead ? 'isRead' : 'isNotRead'}"></i>
						</button>
					</div>
					<p class="author">${book.author}</p>
					<div class="footer">
						<span>${book.pages} pages</span>
						<button onclick="handleRemove(${id})">
							<i class="fa-solid fa-trash-can"></i>
						</button>
					</div>
				</div>
		`;
}
