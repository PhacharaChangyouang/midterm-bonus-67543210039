// src/business/services/bookService.js
const bookRepository = require('../../data/repositories/bookRepository');
const bookValidator = require('../validators/bookValidator');

class BookService {

    async getAllBooks(status = null) {
        if (status) bookValidator.validateId(status); // ถ้าต้อง validate
        const books = await bookRepository.findAll(status);
        const available = books.filter(b => b.status === 'available').length;
        const borrowed = books.filter(b => b.status === 'borrowed').length;
        return { books, statistics: { available, borrowed, total: books.length } };
    }

    async getBookById(id) {
        const validId = bookValidator.validateId(id);
        const book = await bookRepository.findById(validId);
        if (!book) throw new Error('Book not found');
        return book;
    }

    async createBook(bookData) {
        bookValidator.validateBookData(bookData);
        bookValidator.validateISBN(bookData.isbn);
        const newBook = await bookRepository.create(bookData);
        return newBook;
    }

    async updateBook(id, bookData) {
        const validId = bookValidator.validateId(id);
        bookValidator.validateBookData(bookData);
        bookValidator.validateISBN(bookData.isbn);
        
        const existingBook = await bookRepository.findById(validId);
        if (!existingBook) throw new Error('Book not found');

        const updatedBook = await bookRepository.update(validId, bookData);
        return updatedBook;
    }

    async borrowBook(id) {
        const validId = bookValidator.validateId(id);
        const book = await bookRepository.findById(validId);
        if (!book) throw new Error('Book not found');
        if (book.status === 'borrowed') throw new Error('Book is already borrowed');
        return await bookRepository.updateStatus(validId, 'borrowed');
    }

    async returnBook(id) {
        const validId = bookValidator.validateId(id);
        const book = await bookRepository.findById(validId);
        if (!book) throw new Error('Book not found');
        if (book.status !== 'borrowed') throw new Error('Book is not borrowed');
        return await bookRepository.updateStatus(validId, 'available');
    }

    async deleteBook(id) {
        const validId = bookValidator.validateId(id);
        const book = await bookRepository.findById(validId);
        if (!book) throw new Error('Book not found');
        if (book.status === 'borrowed') throw new Error('Cannot delete borrowed book');
        return await bookRepository.delete(validId);
    }
}

module.exports = new BookService();
