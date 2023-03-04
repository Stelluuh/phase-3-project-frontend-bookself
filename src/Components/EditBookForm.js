import React, { useState } from 'react'

const EditBookForm = ({ read }) => {
    const [isRead, setIsRead] = useState(read)

    // const handleEditButton = (e) => {
    //     e.preventDefault
    //     fetch(`http://localhost:9292/books/${book.id}`, { 
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         read: read
    //       }),
    //     })
    //       .then((r) => r.json())
    //       .then(() => console.log('edit me!'));
    //   }

  return (
    <div>
      <h1>BookForm</h1>
    </div>
  )
}

export default EditBookForm
