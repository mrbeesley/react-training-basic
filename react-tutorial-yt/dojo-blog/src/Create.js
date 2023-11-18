
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('yoshi');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    try {
      const res = await fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog)
      });
      console.log('blog added');
      console.log(res);
      setIsPending(false);
      navigate('/');
    } catch (err) {
      console.log(err.message);
      setIsPending(false);
    }
  }


  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}>
        </textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}>
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
          <option value='luigi'>luigi</option>
          <option value='peach'>peach</option>
          <option value='toad'>toad</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog</button>}
      </form>
    </div>
  );
}

export default Create;
