import React from 'react'

const Book = ({ book }) => {
const {title, author, genre, read, reader} = book

  return (
    <tr>  
      <td>{title}</td>
      <td>{author}</td> 
      <td>{genre}</td>
      <td>{read}</td>
      <td>{reader}</td>
      <td>
        <button className="btn1" type="button" >Edit</button>
        <button className="btn2" type="button" >Delete</button>
      </td>
    </tr>
  )
}

export default Book

