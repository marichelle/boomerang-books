/*
Fetch books:
  Request URL: /books
  Request Method: GET
  Response Body: [
    { "id": 1, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien", ... },
    { "id": 2, "title": "The Body", "author": "Stephen King", ... },
    { "id": 3, "title": "Jude the Obscure", "author": "Thomas Hardy", ... }
  ]

Create book:
  Request URL: /books
  Request Method: POST
  Request Body: { "title": "The Lord of the Rings", "author": "J.R.R. Tolkien", ... }
  Response Body: { "id": 1, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien", ... }

Update book:
  Request URL: /books/{id}
  Request Method: PUT
  Request Body: { "id": 1, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien", ... }
  Response Body: { "id": 1, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien", ... }

Delete book:
  Request URL: /books/{id}
  Request Method: DELETE
  Response Body: { "id": 1, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien", ... }
*/

import axios from 'axios'

const API_SERVER_HOST = 'http://localhost:3001'

const addBook = async book => await axios.post(`${API_SERVER_HOST}/books`, book)

const deleteBook = async id =>
  await axios.delete(`${API_SERVER_HOST}/books/${id}`)

const fetchBooks = async () => await axios.get(`${API_SERVER_HOST}/books`)

const updateBook = async book =>
  await axios.put(`${API_SERVER_HOST}/books/${book.id}`, book)

export { addBook, deleteBook, fetchBooks, updateBook }
