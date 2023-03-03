import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar'
import Bookshelves from './Bookshelves'
import Bookshelf from './Bookshelf'
import Home from './Home'
import '../App.css';

const App = () => {
 


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/bookshelfs" element={<Bookshelves />}/>
        <Route path="/bookshelfs/:id" element={<Bookshelf />}/>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
