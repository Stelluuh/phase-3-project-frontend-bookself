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
        
        <label>read: </label>
                <input 
                    type="text"
                    name="read"
                    value={updatedRead.read}
                    onChange={handleChange}
                />
                <input type="submit" value="save" />
    </form>
  )
}

export default EditBookForm
