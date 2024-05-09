import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from '../css/register.module.css';
import Ellipse from '../img/Ellipse.png'; 
import Ellipse2 from '../img/Ellipse2.png';
import Character from '../img/Character.png';
import Google from '../img/google.png';
import Apple from '../img/apple.png';


function Register() {
    return (
        <div className={styles.MainContainer}>
            <div className={styles.HeaderText}> 
                <h1>Welcome!</h1>
                <h1>SignUp to You<span className={styles.Spantxt}>Sap</span></h1>
                <h3>if you already have an <br></br> account you can</h3> 
                <Link to="/login" className={styles.logintxt}>Sign in here!</Link>
            </div>

            <div className={styles.Ball1}> 
                <img src={Ellipse} alt="Ellipse Icon" className={styles.EllipseIcon} />
            </div>
            <div className={styles.Ball2}> 
                <img src={Ellipse2} alt="Ellipse Icon" className={styles.EllipseIcon2} />
            </div>
            <div className={styles.Character}> 
                <img src={Character} alt="Ellipse Icon" className={styles.Char} />
            </div>
        
            <div className={styles.SignUpContainer}>
                <h1>Sign Up</h1>
                <button className={styles.googleButton}>
                    <img src={Google} alt="Google Icon" className={styles.icon} />
                    Continue with Google</button>
                <button className={styles.appleButton}>
                    <img src={Apple} alt="Apple Icon" className={styles.icon} />Continue with Apple</button>
                <hr className={styles.lineSeparator}/>
                <div className={styles.inputContainer}>
                <input type="email" placeholder="Email" className={styles.inputBox} />
                <input type="password" placeholder="Password" className={styles.inputBox} />
                <button className={styles.signupbtn}>Sign Up</button>
                </div>
            </div>



        </div>

    );
}

export default Register;
