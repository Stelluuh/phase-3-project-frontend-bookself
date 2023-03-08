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
      {isEditing ? (
      <EditBookForm book={book} handleEditRead={handleEditButton} setIsEditing={setIsEditing} isEditing={isEditing}/>) : (
        // <tr key={id}>  
        //   <td><b>Title: </b>{title}</ul>
        //   <td><b>Author: </b>{author}</ul> 
        //   <td><b>Genre: </b>{genre}</ul>
        //   <td><b>Read: </b>{read}</ul>
        //   <td><b>Reader: </b>{reader}</ul>
        //   <td>
        //     <button className="btn1" type="button" onClick={handleEditButton} >Edit</button>
        //     <button className="btn2" type="button" onClick={handleDeleteButton}>Delete</button>
        //   </ul>
        // </tr>
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
        // <div>
        //   <li> <b>Title: </b>{title} </li>,
        //   <li><b>Author: </b>{author}</li>,
        //   <li><b>Genre: </b>{genre}</li>,
        //   <li><b>Read: </b>{read}</li>,
        //   <li><b>Reader: </b>{reader}</li>,
        //   <li><button className="btn1" type="button" onClick={handleEditButton} >Edit</button></li>,
        //   <li><button className="btn2" type="button" onClick={handleDeleteButton}>Delete</button></li>
        // </div>
        
      )}
    </div>
    
  )
}

export default Book

