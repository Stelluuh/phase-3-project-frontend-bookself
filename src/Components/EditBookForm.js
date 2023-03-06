import React, { useState } from 'react'

const EditBookForm = ({ read, id, onEditRead }) => {
    const [updatedRead, setUpdatedRead] = useState(read)


    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch(`http://localhost:9292/books/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                read: updatedRead,
            }),
        }, [])
            .then(response => response.json())
            .then(data => onEditRead(data))
    }


  return (
    <form onSubmit={handleSubmit}>
        <label>read: </label>
                <input 
                    type="text"
                    name="read"
                    value={updatedRead}
                    onChange={(e) => setUpdatedRead(e.target.value)}
                />
                <input type="submit" value="save" />
    </form>
  )
}

export default EditBookForm
