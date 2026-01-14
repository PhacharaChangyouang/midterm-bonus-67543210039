function showBookForm(book = null) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('form-title').innerText = book ? 'Edit Book' : 'Add Book';
    document.getElementById('book-id').value = book?.id || '';
    document.getElementById('title').value = book?.title || '';
    document.getElementById('author').value = book?.author || '';
    document.getElementById('isbn').value = book?.isbn || '';
}

function hideBookForm() {
    document.getElementById('modal').style.display = 'none';
}
