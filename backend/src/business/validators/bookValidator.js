// src/business/validators/bookValidator.js

function validateISBN(isbn) {
    if (!isbn) {
        throw new Error('ISBN is required');
    }

    // ลบ - ออกก่อนตรวจ
    const cleanISBN = isbn.replace(/-/g, '');

    // ISBN-10 หรือ ISBN-13
    const isbnPattern = /^(97[89])?\d{9}[\dXx]$/;

    if (!isbnPattern.test(cleanISBN)) {
        throw new Error('Invalid ISBN format');
    }

    return true;
}

function validateBookData(book) {
    const { title, author } = book;

    if (!title || title.trim() === '') {
        throw new Error('Title is required');
    }

    if (!author || author.trim() === '') {
        throw new Error('Author is required');
    }

    return true;
}

// ฟังก์ชันใหม่: validateId
function validateId(id) {
    const numId = parseInt(id);
    if (isNaN(numId) || numId <= 0) {
        throw new Error('Invalid book ID');
    }
    return numId;
}

module.exports = {
    validateISBN,
    validateBookData,
    validateId   
};
