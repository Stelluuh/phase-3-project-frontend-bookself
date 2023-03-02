import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../App.css';

const App = () => {
  const [bookshelves, setBookshelves] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/bookshelfs')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])



  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
