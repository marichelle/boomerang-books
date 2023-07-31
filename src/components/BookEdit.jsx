import { ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/solid'

import useForm from '../hooks/useForm'

function BookEdit({ book, onCancel, onUpdate }) {
  const { fields, handleChange } = useForm(book)

  const handleSubmit = e => {
    e.preventDefault()

    // update record
    onUpdate({
      ...fields,
      ...(fields.thumbnail === '' && {
        thumbnail: 'https://placehold.co/100x150',
      }),
    })

    // close form
    onCancel()
  }

  return (
    <form className="flex flex-col gap-y-6 w-full" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Title
          <span className="text-red-700">*</span>
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="title"
            id="title"
            required
            onChange={handleChange}
            value={fields.title}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="author"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Author
          <span className="text-red-700">*</span>
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="author"
            id="author"
            required
            onChange={handleChange}
            value={fields.author}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="thumbnail"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Image
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="thumbnail"
            id="thumbnail"
            onChange={handleChange}
            value={fields.thumbnail}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Description
          <span className="text-red-700">*</span>
        </label>
        <div className="mt-2.5">
          <textarea
            name="description"
            id="description"
            required
            rows={4}
            onChange={handleChange}
            value={fields.description}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="flex gap-1">
        <button
          type="submit"
          className="flex items-center rounded-md bg-pink-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
        >
          <ArrowPathIcon className="w-4 h-4 mr-1" />
          <span>Update</span>
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center rounded-md bg-pink-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
        >
          <XMarkIcon className="w-4 h-4 mr-1" />
          <span>Cancel</span>
        </button>
      </div>
    </form>
  )
}

export default BookEdit
