import BookShow from './BookShow'

function BookList({ books, onDelete, onEdit }) {
  return (
    <>
      {books.length > 0 ? (
        books.map(book => (
          <li
            key={book.id}
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
          >
            <BookShow book={book} onDelete={onDelete} onEdit={onEdit} />
          </li>
        ))
      ) : (
        <h2 className="p-12 text-center text-sm text-gray-500 italic">
          No books exist.
        </h2>
      )}
    </>
  )
}

export default BookList
