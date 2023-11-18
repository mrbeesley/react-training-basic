import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();
    const handleClick = () => { 
        navigate('/');
    }
  return (
    <div className='not-found'>
      <h2>Sorry, the page you are looking for does not exist.</h2>
      <button onClick={handleClick}>Go Home</button>
    </div>
  );
};

export default NotFound;
