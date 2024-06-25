import React, { useEffect, useState } from 'react'

function index() {

  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blogs/1/posts/').then(
      response => response.json()
    ).then(
      data => {
        setPosts(data)
      }
    )
  }, [])

  return (
    <>
      <h1>Blog Title</h1>
      {
        posts.map((value, index) => (
          <div key={index}>
            <hr />
            {value.title}&emsp;[{value.created_at.substr(0, 10)}]
            <br />
            {value.content.substr(0, 70)}...
            <br />
            <br />
          </div>
        ))
      }
    </>
  )
}

export default index