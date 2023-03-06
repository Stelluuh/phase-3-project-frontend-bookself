import React from 'react'
import { useParams } from 'react-router-dom'
import Book from './Book'
import BookForm from './BookForm'
import '../Stylesheets/Bookshelf.css'

const Bookshelf = ({ bookshelves, onAddBook, onDeleteBook, onEditRead }) => {

  const params = useParams()    
  const bookshelf = bookshelves.find(shelf => shelf.id === parseInt(params.id))
  const bookList = bookshelf.books


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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book) => <Book key={book.id} book={book} onDeleteBook={onDeleteBook} onEditRead={onEditRead}/>)}
        </tbody>
      </table>
      <BookForm onAddBook={onAddBook} bookshelfId={bookshelf.id}/>
    </div>
  )
}

export default Bookshelf
