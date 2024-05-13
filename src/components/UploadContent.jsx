import React, { useState } from 'react';
import styles from '../css/uploadContent.module.css';
import UploadModal from '../components/UploadModal';
import UserProfileImage from '../img/dp.png'; // Import the user profile image

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

  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div className={styles.UploadContent}>
      <UploadModal 
                show={show}
                handleClose={() => setShow(false)}
            />
      <div className={styles.UserImageContainer}>
        <img src={UserProfileImage} alt="User Profile" className={styles.UserImage} />
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={handleChange}
          onClick={handleOpen}
          className={styles.TextArea}
        />
          
        
      </form>
    </div>
  );
}

export default UploadContent;
