import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar'
import Bookshelves from './Bookshelves'
import Bookshelf from './Bookshelf'
import Home from './Home'
import '../App.css';

const App = () => {

  const [bookshelves, setBookshelves] = useState([])

    useEffect(() => {
      fetch('http://localhost:9292/bookshelves')
        .then(response => response.json())
        .then(data => setBookshelves(data))
    }, [])

    // console.log(bookshelves)

  const onAddBook = (newbook) => {
    const updatedBookshelf = bookshelves.map(bookshelf => {
      if (bookshelf.id === newbook.bookshelf_id) {
        return {
          ...bookshelf, 
          books: [...bookshelf.books, newbook]
        }
      } else {
       return bookshelf
      }
    })
    setBookshelves(updatedBookshelf)
  }  

  const onDeleteBook = (deletedBook) => {
    const updatedBookshelf = bookshelves.map(bookshelf => {
      if (bookshelf.id === deletedBook.bookshelf_id) {
        return {
          ...bookshelf,
          books: [...bookshelf.books.filter(book => book.id !== deletedBook.id)]
        }
      } else {
        return bookshelf
      }
    })
    setBookshelves(updatedBookshelf)
 }


  return (
    <Router>
      <NavBar />
      <Routes>
        
        <Route exact path="/bookshelves" element={
          <Bookshelves 
            bookshelves={bookshelves} 
            setBookshelves={setBookshelves} 
          />
        }/>

        <Route path="/bookshelves/:id" element={
          <Bookshelf 
            bookshelves={bookshelves} 
            setBookshelves={setBookshelves} 
            onAddBook={onAddBook}
            onDeleteBook={onDeleteBook}
          />
        }/>

        <Route exact path="/" element={<Home />}/>

      </Routes>
    </Router>
  );
}

export default App;
