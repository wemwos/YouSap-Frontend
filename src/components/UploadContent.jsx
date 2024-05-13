// UploadContent.jsx
import React, { useState } from 'react';
import styles from '../css/uploadContent.module.css';

function UploadContent({ onUpload }) {
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Prepare content object to pass to the onUpload function
    const uploadData = {
      text: content,
      file: file
    };
    onUpload(uploadData);
    setContent('');
    setFile(null);
  };

  return (
    <div className={styles.UploadContent}>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={handleChange}
          className={styles.TextArea}
        />
        <input 
          type="file" 
          onChange={handleFileChange} 
          className={styles.FileInput} 
        />
        <button type="submit" className={styles.Button}>Upload</button>
      </form>
    </div>
  );
}

export default UploadContent;
