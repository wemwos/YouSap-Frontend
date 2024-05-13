import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import styles from '../css/home.module.css';
import AdCard from '../components/AdCard'; // Import the AdCard component
import TextContent from '../components/TextContent'; // Import the TextContent component
import PhotoContent from '../components/PhotoContent'; // Import the PhotoContent component
import VideoContent from '../components/VideoContent'; // Import the VideoContent component
import UploadContent from '../components/UploadContent'; // Import the UploadContent component
import UserImg from '../img/user1.png'; 
import UserImg2 from '../img/george.png';
import DecInd from '../img/dec.png';
import vid from '../img/vid.mp4';


function Home() {
  const handleUpload = (content) => {
    console.log('Uploaded content:', content);
  };

  // Dummy data for users
  const users = [
    { id: 1, name: 'Mike Wazowski', profilePicture: UserImg }, 
    { id: 2, name: 'George Washington', profilePicture: UserImg2 },
    { id: 3, name: 'Cent Vin', profilePicture: 'user3.jpg' }
  ];

  // Dummy data for content
  const contents = [
    { 
      id: 1, 
      type: 'text', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ipsum nec libero convallis ultricies.', 
      userId: 1,
      uploadTime: '1 hr ago'
    },
    { 
      id: 2, 
      type: 'photo', 
      text: 'Me at the mothafucken zoo',
      imageUrl: DecInd, 
      userId: 2,
      uploadTime: '2 hrs ago'
    },
    { 
      id: 3, 
      type: 'video', 
      text: 'Me at the mothafucken zoo  ',
      videoUrl: vid, 
      userId: 3,
      uploadTime: '3 hrs ago'
    }
  ];

  return (
    <Layout>
       <div className={styles.MainContainer}>
          <div className={styles.ContentContainer}>
          
            <UploadContent onUpload={handleUpload} />
            {contents.map(content => {
              if (content.type === 'text') {
                const user = users.find(user => user.id === content.userId);
                return (
                  <TextContent 
                    key={content.id}
                    text={content.text}
                    profilePicture={user.profilePicture}
                    userName={user.name}
                    uploadTime={content.uploadTime}
                  />
                );
              } else if (content.type === 'photo') {
                const user = users.find(user => user.id === content.userId);
                return (
                  <PhotoContent 
                    key={content.id}
                    imageUrl={content.imageUrl}
                    profilePicture={user.profilePicture}
                    userName={user.name}
                    uploadTime={content.uploadTime}
                  />
                );
              } else if (content.type === 'video') {
                const user = users.find(user => user.id === content.userId);
                return (
                  <VideoContent 
                    key={content.id}
                    videoUrl={content.videoUrl}
                    profilePicture={user.profilePicture}
                    userName={user.name}
                    uploadTime={content.uploadTime}
                  />
                );
              }
              return null;
            })}
          </div>

          <div className={styles.SideNavContainer}>
            <AdCard 
              image="ad1.jpg"
              title="YouSapp!"
              description="Modestowad FrontEnd.  ajw fwhh aoj qoi OAHW H IHH AIWH IH"
            />
            <AdCard 
              image="ad2.jpg"
              title="Beng-Beng"
              description="Cormero sa Jos BackEnd.  JWBF IHW OAKWH LJ AWJ QOIHF WEJH "
            />
            <AdCard 
              image="ad3.jpg"
              title="HAHAHAHHA"
              description="Ambe rry goodmorning Project Manager DESCJE BBG AB AHH IW I"
            />
          </div>
       </div>
    </Layout>
  );
}

export default Home;
