
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetails() {

    const { id } = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();
    console.log(blog);

    const handleDelete = async () => {
        try {
            const res = await fetch('http://localhost:8000/blogs/' + blog.id, {
                method: 'DELETE'
            });
            console.log('blog deleted');
            console.log(res);
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    };

  return (
    <div className='blog-details'>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        { blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete</button>
            </article>
        )}
    </div>
  );
}

export default BlogDetails;
