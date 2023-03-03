import React, { useState, useEffect } from 'react'
import BookshelfLocation from './BookshelfLocation'
import BookshelfForm from './BookshelfForm'

const Bookshelves = () => {
    const [bookshelves, setBookshelves] = useState([])

    useEffect(() => {
      fetch('http://localhost:9292/bookshelfs')
        .then(response => response.json())
        .then(data => setBookshelves(data))
    }, [])

    const allBookshelves = bookshelves.map(bookshelf => (
        <BookshelfLocation 
            key={bookshelf.id} 
            bookshelf={bookshelf}
        />
    ))

    const handleAddBookshelves = (newBookshelf) => setBookshelves([...bookshelves, newBookshelf])

  return (
    <div>
      <h1>Bookshelf Locations:</h1>
        {allBookshelves}  
        <br/>
        <hr/>
        <h3>Add new Reader</h3>
        <BookshelfForm 
          onAddReader = {handleAddBookshelves}
          /> 
    </div>
  )
}

export default Bookshelves
