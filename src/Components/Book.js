import React, { useState } from 'react'
import EditBookForm from './EditBookForm'

const Book = ({ book, onDeleteBook }) => {
  const [isEditing, setIsEditing] = useState(false)

  const {id, title, author, genre, read, reader} = book

  const handleDeleteButton = () => {
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => onDeleteBook(book))
  }

  const handleEditButton = () => {
    setIsEditing(() => !isEditing)
  }
  

  return (
    <div>
      {isEditing ? <EditBookForm read={read} id={id}/> : (
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

