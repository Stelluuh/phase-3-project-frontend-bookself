import React, { useState, useEffect } from 'react'
import BookshelfLocation from './BookshelfLocation'

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

  return (
    <div>
      <h1>Bookshelf Locations:</h1>
        {allBookshelves}   
    </div>
  )
}

export default Bookshelves
