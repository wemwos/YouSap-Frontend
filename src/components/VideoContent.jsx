// VideoContent.jsx
import React, { useState } from 'react';
import styles from '../css/videoContent.module.css';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa'; 

function VideoContent({ text, videoUrl, profilePicture, userName, uploadTime }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className={styles.VideoContent}>
      <div className={styles.UserInfo}>
        <img src={profilePicture} alt="Profile" className={styles.ProfilePicture} />
        <div>
          <p className={styles.UserName} style={{ fontWeight: '600' }}>{userName}</p>
          <p className={styles.UploadTime} style={{ fontSize: '12px' }}>{uploadTime}</p>
        </div>
      </div>
      <p className={styles.textP}>{text}</p>
      <video controls className={styles.Video}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.LikeCount}><FaThumbsUp/>    {likeCount}</div>
      <div className={styles.Buttons}>
        <button onClick={handleLike}><FaThumbsUp /> Like</button>
        <button><FaComment /> Comment</button>
        <button><FaShare /> Share</button>
      </div>
    </div>
  );
}

export default VideoContent;
