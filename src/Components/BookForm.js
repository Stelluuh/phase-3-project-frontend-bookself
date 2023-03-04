import React, { useState } from 'react'

const BookForm = ({ onAddBook, bookshelfId }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [read, setRead] = useState('No')
    const [reader, setReader] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();
      const newItem = {
        title,
        author,
        genre,
        bookshelf_id: bookshelfId,
        read,
        reader
      }
  
      fetch('http://localhost:9292/books', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem)
      })
      .then(response => response.json())
      .then(newBook => {
        onAddBook(newBook)
        setTitle('')
        setAuthor('')
        setGenre('')
        setRead('')
        setReader('')
      })
    }
  
    return (
      <div className="newbook">
        <h3>New Book Form</h3>
        <form className="newItem" onSubmit={handleSubmit}>
          <div className="top-container">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
                
            <br/>
            <label>Author</label>
            <input
              type="text"
              value={author}
              onChange={e => setAuthor(e.target.value)}
            />
            
            <br/>
            <label>Genre:</label>
            <input
              type="text"
              value={genre}
              onChange={e => setGenre(e.target.value)}
  
            />
    
            <br/>
            <label htmlFor="read">Read?: </label>
            <select
              id="read"
              value={read}
              onChange={(e) => setRead(e.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
  
            <br/>
            <label>Reader:</label>
            <input
              type="text"
              value={reader}
              onChange={e => setReader(e.target.value)}
            />
            </div>
            <div className="bottom-container">
  
            <button type="submit" id="submit">Submit</button>
          </div>
        </form>
      </div>
    )
}

export default BookForm
