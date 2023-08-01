import { useBooksContext } from '../contexts/BooksContext'
import BookShow from './BookShow'

function BookList() {
  const { books } = useBooksContext()

  return (
    <>
      {books.length > 0 ? (
        books.map(book => (
          <li
            key={book.id}
            className="relative flex justify-between px-4 py-5 gap-x-6 hover:bg-gray-50 sm:px-6"
          >
            <BookShow book={book} />
          </li>
        ))
      ) : (
        <h2 className="p-12 text-sm italic text-center text-gray-500">
          No books exist.
        </h2>
      )}
    </>
  )
}

export default BookList
