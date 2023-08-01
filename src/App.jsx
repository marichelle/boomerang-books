import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

/* const initialBooks = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description:
      'To Kill a Mockingbird is a 1961 novel by Harper Lee. Set in small-town Alabama, the novel is a bildungsroman, or coming-of-age story, and chronicles the childhood of Scout and Jem Finch as their father Atticus defends a Black man falsely accused of rape. Scout and Jem are mocked by classmates for this.',
    thumbnail: 'https://freight.cargo.site/w/906/q/94/i/b3052f7f5391d2a58a33c584c53bbf1895e58abe7f1f58a0c9c020924b8323e9/cover-web.jpg',
  },
  {
    id: 2,
    title: 'On the Road',
    author: 'Jack Kerouac',
    description:
      'On the Road is a 1957 novel by American writer Jack Kerouac, based on the travels of Kerouac and his friends across the United States. It is considered a defining work of the postwar Beat and Counterculture generations, with its protagonists living life against a backdrop of jazz, poetry, and drug use.',
    thumbnail: 'https://assets.fontsinuse.com/static/use-media-items/139/138204/upto-700xauto/608ae0a9/@2x/moker_ontwerp_on_the_road.webp',
  },
  {
    id: 3,
    title: 'Jude the Obscure',
    author: 'Thomas Hardy',
    description:
      'Jude the Obscure is a novel by Thomas Hardy, which began as a magazine serial in December 1894 and was first published in book form in 1895. It is Hardy's last completed novel. The protagonist, Jude Fawley, is a working-class young man; he is a stonemason who dreams of becoming a scholar.',
    thumbnail: 'http://www.brixtondoylestudio.com/wp-content/uploads/2016/03/BC_JudeObscure_Brixton_Doyle.jpg',
  },
] */

function App() {
  const [displayForm, setDisplayForm] = useState(false)
  const toggleForm = () => setDisplayForm(prevState => !prevState)

  return (
    <div className="px-4 mx-auto my-6 max-w-7xl sm:px-6 lg:px-8">
      <ul className="overflow-hidden bg-white divide-y divide-gray-100 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
        <li>
          <div className="px-4 py-5 bg-white border-b border-gray-200 sm:px-6">
            <div className="flex flex-wrap items-center justify-between -mt-2 -ml-4 sm:flex-nowrap">
              <div className="mt-2 ml-4">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  My Reading List
                </h3>
              </div>
              <div className="flex-shrink-0 mt-2 ml-4">
                <button
                  type="button"
                  className="relative inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-pink-600 rounded-md shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                  onClick={toggleForm}
                >
                  <PlusIcon className="w-5 h-4" />
                  <span>Add a book</span>
                </button>
              </div>
            </div>
          </div>
        </li>
        <BookList />
      </ul>

      <BookCreate open={displayForm} toggle={toggleForm} />
    </div>
  )
}

export default App
