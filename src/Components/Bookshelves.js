import React from 'react'
import BookshelfClick from './BookshelfClick'
import BookshelfForm from './BookshelfForm'

const Bookshelves = ({ bookshelves, setBookshelves }) => {
   

    const renderBookshelves = bookshelves.map(bookshelf => (
        // console.log({bookshelf})
        <BookshelfClick 
            key={bookshelf.id} 
            bookshelf={bookshelf}
        />
    ))

    const handleAddBookshelves = (newBookshelf) => setBookshelves([...bookshelves, newBookshelf])

  return (
    <div>
      <h1>Bookshelf Locations:</h1>
        {renderBookshelves}  
        <br/>
        <hr/>
        <h3>Add a new bookshelf location:</h3>
        <BookshelfForm 
          onAddLocation = {handleAddBookshelves}
        /> 
    </div>
  )
}

export default Bookshelves
