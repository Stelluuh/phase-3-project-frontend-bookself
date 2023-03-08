import React, { useState } from 'react'

const EditBookForm = ({ book, handleEditRead, isEditing, setIsEditing }) => {
    const [updatedRead, setUpdatedRead] = useState({...book})
    // console.log(updatedRead)
    console.log(book)

    const handleChange = (e) => {
        setUpdatedRead({...updatedRead,
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
                value={updatedRead.title}
                onChange={handleChange}
                // disabled='disabled' 
            />
        <br/>
        <label>author:</label>
            <input
                type="text"
                name="author"
                value={updatedRead.author} 
                onChange={handleChange}
                // disabled='disabled'
            />
        <br/>
        <label>genre:</label>
            <input
                type="text"
                name="genre"
                value={updatedRead.genre}
                onChange={handleChange}
                // disabled='disabled' 
            />
        <br/>
        <label>read: </label>
            <input 
                type="text"
                name="read"
                value={updatedRead.read}
                onChange={handleChange}
            />
        <br/>
         <label>reader:</label>
            <input
                type="text"
                name="reader"
                value={updatedRead.reader} 
                onChange={handleChange}
                // disabled='disabled'
            />
        <br/>
            <input type="submit" value="save" />
           
    </form>
  )
}

export default EditBookForm
