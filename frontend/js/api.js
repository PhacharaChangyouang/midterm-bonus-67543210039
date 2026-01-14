const API_BASE_URL = 'http://10.0.2.15:3000/api'; // ← เปลี่ยนเป็น IP VM ของคุณ

const api = {
  getAllBooks: async (status) => {
    const url = status ? `${API_BASE_URL}/books?status=${status}` : `${API_BASE_URL}/books`;
    const res = await fetch(url);
    return await res.json();
  },

  getBookById: async (id) => {
    const res = await fetch(`${API_BASE_URL}/books/${id}`);
    return await res.json();
  },

  createBook: async (book) => {
    const res = await fetch(`${API_BASE_URL}/books`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });
    return await res.json();
  },

  updateBook: async (id, book) => {
    const res = await fetch(`${API_BASE_URL}/books/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });
    return await res.json();
  },

  borrowBook: async (id) => {
    const res = await fetch(`${API_BASE_URL}/books/${id}/borrow`, { method: 'PATCH' });
    return await res.json();
  },

  returnBook: async (id) => {
    const res = await fetch(`${API_BASE_URL}/books/${id}/return`, { method: 'PATCH' });
    return await res.json();
  },

  deleteBook: async (id) => {
    const res = await fetch(`${API_BASE_URL}/books/${id}`, { method: 'DELETE' });
    return await res.json();
  }
};
