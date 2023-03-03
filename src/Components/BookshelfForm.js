import React, { useState } from 'react'

const BookshelfForm = ({ onAddLocation }) => {
    const [location, setLocation] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newLocation = {
            location: location
        }

        fetch('http://localhost:9292/bookshelves', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newLocation)
        })
        .then(response => response.json())
        .then(data => {
            onAddLocation(data)
            setLocation('')
        })
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>New Location: </label>
        <input 
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            />
        <br/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default BookshelfForm
