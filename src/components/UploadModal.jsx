import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaCamera, FaVideo } from 'react-icons/fa';
import styles from '../css/upload-modal.module.css';

const UploadModal = ({ show, handleClose, handleUpload }) => {
  const [content, setContent] = useState({
    type: 'photo',
    file: null,
    text: '' // Added text field
  });

  const handleContentChange = (type) => {
    setContent(prevContent => ({
      ...prevContent,
      type
    }));
  };

  const handleFileChange = (e) => {
    setContent(prevContent => ({
      ...prevContent,
      file: e.target.files[0]
    }));
  };

  const handleTextChange = (e) => {
    setContent(prevContent => ({
      ...prevContent,
      text: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpload(content);
    handleClose();
  };

  return (  
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className={styles.uploadModal_header}>
        <Modal.Title className={styles.uploadModal_title}>Create Post</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.uploadModal_body}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="contentType">
            <div>
              <Button onClick={() => handleContentChange('photo')} className={`${styles.uploadModal_button} mr-2`}>
                <FaCamera /> 
              </Button>
              <Button  onClick={() => handleContentChange('video')} className={styles.uploadModal_button}>
                <FaVideo /> 
              </Button>
            </div>
          </Form.Group>
          {content.type === 'photo' && (
            <Form.Group controlId="photo">
              <Form.Control type="file" accept="image/*" onChange={handleFileChange} className={styles.uploadModal_input} />
            </Form.Group>
          )}
          {content.type === 'video' && (
            <Form.Group controlId="video">
              <Form.Control type="file" accept="video/*" onChange={handleFileChange} className={styles.uploadModal_input} />
            </Form.Group>
          )}
          <Form.Group controlId="text">
            <Form.Control as="textarea" placeholder='What are you up to today?'  rows={3} value={content.text} onChange={handleTextChange} className={styles.uploadModal_input} />
          </Form.Group>
          <Button variant="primary" type="submit" className={styles.uploadModal_uploadButton}>
            Upload
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UploadModal;
