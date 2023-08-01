import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import BookEdit from './BookEdit'
import { useBooksContext } from '../contexts/BooksContext'

function BookShow({ book }) {
  const { id, author, description, thumbnail, title } = book
  const { removeBook } = useBooksContext()
  const [displayEditForm, setEditForm] = useState(false)

  const toggleForm = () => setEditForm(prevState => !prevState)

  return (
    <>
      {displayEditForm ? (
        <BookEdit book={book} toggle={toggleForm} />
      ) : (
        <>
          {/* book details */}
          <div className="flex gap-x-4">
            <img
              className="flex-none w-24 bg-gray-50"
              src={thumbnail}
              alt={title}
            />
            <div className="flex-auto min-w-0">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <span className="absolute inset-x-0 bottom-0 -top-px" />
                {title}
              </p>
              <p className="flex mt-1 text-xs leading-5 text-gray-500">
                {author}
              </p>
              <p className="flex max-w-xl mt-4 text-xs text-gray-900">
                {description}
              </p>
            </div>
          </div>

          {/* action buttons */}
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <button
                className="z-10 flex items-center text-xs leading-6 text-gray-900 uppercase hover:text-pink-600"
                onClick={toggleForm}
              >
                <span>Update</span>
                <PencilSquareIcon className="w-4 h-4 ml-2" />
              </button>
              <button
                className="z-10 flex items-center text-xs leading-6 text-gray-900 uppercase hover:text-pink-600"
                onClick={() => removeBook(id)}
              >
                <span>Delete</span>
                <TrashIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default BookShow
