import React from 'react'
import { Link } from 'react-router-dom'
import Books from './Bookshelf'



const BookshelLocation = ({ bookshelf }) => {
  // console.log(bookshelf.books)

  return (
    <div>
      <Link to={`/bookshelfs/${bookshelf.id}`}>
        <li>
          { bookshelf.location }
        </li>
      </Link>
    

    </div>
  )
}

export default BookshelLocation
