import React, { useState } from 'react'

const EditBookForm = ({ book, handleEditRead, isEditing, setIsEditing }) => {
    const [updatedRead, setUpdatedRead] = useState({...book})
    // console.log(updatedRead)

    const handleChange = (e) => {
        setUpdatedRead({...book,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsEditing(() => !isEditing)
        fetch(`http://localhost:9292/books/${book.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedRead)
        })
            .then(response => response.json())
            .then((data)=> handleEditRead(data))
    }


  return (
    <form onSubmit={handleSubmit}>

        <label>title:</label>
        <input
            type="text"
            name="title"
            value={book.title}
            disabled='disabled' 
        />
        <label>author:</label>
        <input
            type="text"
            name="title"
            value={book.author} 
            disabled='disabled'
        />
        <label>genre:</label>
        <input
            type="text"
            name="title"
            value={book.genre}
            disabled='disabled' 
        />
        <label>read: </label>
         <input 
            type="text"
            name="read"
            value={updatedRead.read}
            onChange={handleChange}
         />
         <label>reader:</label>
         <input
            type="text"
            name="title"
            value={book.reader} 
            disabled='disabled'
          />
            <input type="submit" value="save" />
    </form>
  )
}

export default EditBookForm
