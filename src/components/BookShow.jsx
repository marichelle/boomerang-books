import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import BookEdit from './BookEdit'

function BookShow({ book, onDelete, onEdit }) {
  const { id, author, description, thumbnail, title } = book
  const [displayEditForm, setEditForm] = useState(false)

  const toggleForm = () => setEditForm(prevState => !prevState)

  return (
    <>
      {displayEditForm ? (
        <BookEdit book={book} onEdit={onEdit} toggle={toggleForm} />
      ) : (
        <>
          {/* book details */}
          <div className="flex gap-x-4">
            <img
              className="w-24 flex-none bg-gray-50"
              src={thumbnail}
              alt={title}
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <span className="absolute inset-x-0 -top-px bottom-0" />
                {title}
              </p>
              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                {author}
              </p>
              <p className="mt-4 flex text-xs text-gray-900 max-w-xl">
                {description}
              </p>
            </div>
          </div>

          {/* action buttons */}
          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <button
                className="flex items-center text-xs text-gray-900 leading-6 uppercase z-10 hover:text-pink-600"
                onClick={toggleForm}
              >
                <span>Update</span>
                <PencilSquareIcon className="h-4 w-4 ml-2" />
              </button>
              <button
                className="flex items-center text-xs text-gray-900 leading-6 uppercase z-10 hover:text-pink-600"
                onClick={() => onDelete(id)}
              >
                <span>Delete</span>
                <TrashIcon className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default BookShow
