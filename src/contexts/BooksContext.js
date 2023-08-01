import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const API_SERVER_HOST = 'http://localhost:3001'

const BooksContext = createContext()

const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([])

  const addBook = async book => {
    const response = await axios.post(`${API_SERVER_HOST}/books`, book)
    setBooks(prevState => [...prevState, response.data])
  }

  const editBook = async updatedBook => {
    const response = await axios.put(
      `${API_SERVER_HOST}/books/${updatedBook.id}`,
      updatedBook
    )
    setBooks(prevState =>
      prevState.map(book => (book.id === updatedBook.id ? response.data : book))
    )
  }

  const removeBook = async id => {
    await axios.delete(`${API_SERVER_HOST}/books/${id}`)
    setBooks(prevState => prevState.filter(book => book.id !== id))
  }

  useEffect(() => {
    const init = async () => {
      const response = await axios.get(`${API_SERVER_HOST}/books`)
      setBooks(response.data)
    }

    init()
  }, [])

  return (
    <BooksContext.Provider
      value={{
        books,
        addBook,
        editBook,
        removeBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

const useBooksContext = () => useContext(BooksContext)

export { BooksContextProvider, useBooksContext }
