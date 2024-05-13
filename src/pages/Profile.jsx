import React from 'react';
import Layout from '../layouts/Layout';
import styles from '../css/profile.module.css';
import Bg from '../img/bg.png';
import Dp from '../img/dp.png';

function Profile() {
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
                </div>
            </div>
        </Layout>
    );
}

export default Profile;
