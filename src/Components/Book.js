import React from 'react'

const Book = ({ book, onDeleteBook }) => {
  const {title, author, genre, read, reader} = book

  const handleDeleteButton = () => {
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => onDeleteBook(book))
  }
  

  return (
    <tr>  
      <td>{title}</td>
      <td>{author}</td> 
      <td>{genre}</td>
      <td>{read}</td>
      <td>{reader}</td>
      <td>
        <button className="btn1" type="button" >Edit</button>
        <button className="btn2" type="button" onClick={handleDeleteButton}>Delete</button>
      </td>
    </tr>
  )
}

export default Book

