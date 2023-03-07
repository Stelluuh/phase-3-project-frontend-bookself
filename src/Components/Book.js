import React, { useState } from 'react'
import EditBookForm from './EditBookForm'
import '../Stylesheets/Book.css'

const Book = ({ book, onDeleteBook, onEditRead }) => {
  const [isEditing, setIsEditing] = useState(false)
  const {id, title, author, genre, read, reader} = book

  const handleDeleteButton = () => {
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => onDeleteBook(book))
  }

  const handleEditButton = (updatedText) => {
    setIsEditing(() => !isEditing);
    onEditRead(updatedText)
    
  }

  return (
    <div>
      {isEditing ? <EditBookForm book={book} handleEditRead={handleEditButton} setIsEditing={setIsEditing} isEditing={isEditing}/> : (
        <tr>  
          <td>{title}</td>
          <td>{author}</td> 
          <td>{genre}</td>
          <td>{read}</td>
          <td>{reader}</td>
          <td>
            <button className="btn1" type="button" onClick={handleEditButton} >Edit</button>
            <button className="btn2" type="button" onClick={handleDeleteButton}>Delete</button>
          </td>
        </tr>
      )}
    </div>
    
  )
}

export default Book

