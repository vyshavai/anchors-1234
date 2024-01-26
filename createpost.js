import React, { useState } from 'react';
import '../styles/createpost.css';
import { Outlet } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePostSubmit = async () => {
    try {
      const response = await fetch('https://ap-south-1.aws.data.mongodb-api.com/app/satya123-diawr/endpoint/postdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (response.ok) {
        console.log('Post submitted successfully');
        window.alert('Post submitted successfully');
      } else {
        console.error('Failed to submit post');
        window.alert('Failed to submit post');
      }
    } catch (error) {
      console.error('Error:', error);
      window.alert('Error while submitting post');
    }
  };

  return (
    <div className="bigContainer">
      <h2>Create post</h2>
      <div className="inputContainer">
      <div
          id="title"
          className="input1"
          contentEditable
          onFocus={(e) => {
            if (e.target.textContent === 'Post Title') {
              e.target.textContent = '';
            }
          }}
          onBlur={(e) => setTitle(e.target.textContent)}
        >Post Title</div>
        <div
          id="description"
          className="input2"
          contentEditable
          onFocus={(e) => {
            if (e.target.textContent === 'Describe your post...') {
              e.target.textContent = '';
            }
          }}
          onBlur={(e) => setDescription(e.target.textContent)}
        >Describe your post...</div>
      </div>
      <div className="postButton" onClick={handlePostSubmit}>
        Post Submit
      </div>
      <Outlet />
    </div>
  );
};

export default CreatePost;
