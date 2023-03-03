import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState({
    books: []
  })
  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/books/:${params.id}`)
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  // console.log(bookshelf.books)

  return (
    <div>
      <h3>Hello from bookshelf!</h3>
    </div>
  )
}

export default Bookshelf
