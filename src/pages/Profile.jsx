import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import styles from '../css/profile.module.css';
import Bg from '../img/bg.png';
import Dp from '../img/dp.png';
import UploadContent from '../components/UploadContent';

function Profile() {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('Posts');

    return (
        <Layout>
            <div className={styles.TopContainer}>
                <div className={styles.bg}>
                    <img src={Bg} alt="Background" />
                </div>
                <div className={styles.ProfileInfo}>
                    <div className={styles.ProfilePic}>
                        <img src={Dp} alt="Profile" />
                    </div>
                    <div className={styles.FullName}>Raymart Modesto</div>
                    <div className={styles.Username}>@martmodesto</div>
                    <button className={styles.EditProfileButton}>Edit Profile</button>
                    <hr className={styles.Separator} />
                    <div className={styles.Tabs}>
                        {/* Posts tab */}
                        <div
                            className={`${styles.Tab} ${activeTab === 'Posts' ? styles.active : ''}`}
                            onClick={() => setActiveTab('Posts')}
                        >
                            Posts
                        </div>
                        {/* Bio tab */}
                        <div
                            className={`${styles.Tab} ${activeTab === 'Bio' ? styles.active : ''}`}
                            onClick={() => setActiveTab('Bio')}
                        >
                            Bio
                        </div>
                    </div>
                    {/* Content for Posts tab */}
                    {activeTab === 'Posts' && (
                        <div className={styles.Content}>
                            {/* Insert content for Posts tab here */}
                            <UploadContent>
                                
                            </UploadContent>
                        </div>
                    )}
                    {/* Content for Bio tab */}
                    {activeTab === 'Bio' && (
                        <div className={styles.Content}>
                            {/* Insert content for Bio tab here */}
                            <h2>Bio</h2>
                            <p>This is where the bio content goes...</p>
                        </div>
                    )}
                </div>
            </div>
        </Layout>   
    );
}

export default Profile;
