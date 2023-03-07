import React from 'react'
import { useParams } from 'react-router-dom'
import Book from './Book'
import BookForm from './BookForm'
import '../Stylesheets/Bookshelf.css'

const Bookshelf = ({ bookshelves, onAddBook, onDeleteBook, onEditRead }) => {

  const params = useParams()    
  const currentBookshelf = bookshelves.find(shelf => shelf.id === parseInt(params.id))

  if(!currentBookshelf) {
    return <h1>Loading</h1>
  }
  const bookList = currentBookshelf.books

  
  return (
    <div>
      <h3>{ currentBookshelf.location }</h3>
      
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Read: Y/N</th>
            <th>Reader</th>
            <th>edit/delete:</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book) => <Book key={book.id} book={book} onDeleteBook={onDeleteBook} onEditRead={onEditRead}/>)}
        </tbody>
      </table>

      <BookForm onAddBook={onAddBook} bookshelfId={currentBookshelf.id}/>
    </div>
  )
}

export default Bookshelf
