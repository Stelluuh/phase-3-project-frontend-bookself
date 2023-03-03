import React from 'react'
import { useParams } from 'react-router-dom'
import Book from './Book'

const Bookshelf = ({ bookshelves }) => {
    // console.log(bookshelves)
    const params = useParams()    
    const bookshelf = bookshelves.find(shelf => shelf.id == params.id)
    console.log(bookshelf)

    

  return (
    <div className="bookshelf">
      <h3>Hello from bookshelf!</h3>
      { bookshelf.location }
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Read: Y/N</th>
            <th>Reader</th>
          </tr>
        </thead>
        <tbody>
          <Book bookshelf={bookshelf} />
        </tbody>
      </table>
    </div>
  )
}

export default Bookshelf
