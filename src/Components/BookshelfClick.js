import React from 'react'
import { Link } from 'react-router-dom'



const BookshelfClick = ({ bookshelf }) => {
  // console.log(bookshelf.books)

  return (
    <div>
      <Link to={`/bookshelves/${bookshelf.id}`}>
        <li>
          { bookshelf.location }
        </li>
      </Link>
    

    </div>
  )
}

export default BookshelfClick
