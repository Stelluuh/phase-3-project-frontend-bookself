import React, { useState } from 'react'
import EditBook from './EditBook'
import '../Stylesheets/Book.css'

const Book = ({ book, onDeleteBook, onEditRead }) => {
  const [isEditing, setIsEditing] = useState(false)
  const {title, author, genre, read, reader} = book

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
      {isEditing ? (
      <EditBook book={book} handleEditRead={handleEditButton} setIsEditing={setIsEditing} isEditing={isEditing}/>) : (
        <div className='bookcard'>  
          <ul><b>Title: </b>{title}</ul>
          <ul><b>Author: </b>{author}</ul> 
          <ul><b>Genre: </b>{genre}</ul>
          <ul><b>Read: </b>{read}</ul>
          <ul><b>Reader: </b>{reader}</ul>
          <ul>
            <button className="btn1" type="button" onClick={handleEditButton} >Edit</button>
            <button className="btn2" type="button" onClick={handleDeleteButton}>Delete</button>
          </ul>
        </div>        
      )}
    </div>
    
  )
}

export default Book

