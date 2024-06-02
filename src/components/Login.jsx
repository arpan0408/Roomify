import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import React, { useState } from 'react';
import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import { setDoc, doc } from "firebase/firestore";
import './login.css'

function Login() {
    //< validation with firebase for signup
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            console.log("Account Created!")
            alert("Account created successfully!")
            window.location.href = "/";
        } catch (err) {
            console.log(err)
            alert(err)
        }
    }
    // validation with firebase for signup >

    //< validation with firebase for login
    const [email_l, setEmail_l] = useState('')
    const [password_l, setPassword_l] = useState('')

    const handleSubmit_l = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email_l, password_l)
            console.log("Login sucessfully!")
            window.location.href = "/Home";
        } catch (err) {
            console.log(err.message);
            alert(err.message)
        }
    }
    // validation with firebase for login >

  
    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    }
    const loginLink = () => {
        setAction('');
    }
    return (
        <div className={`wrapper ${action}`}>
            <div className="form-box login">
                <form onSubmit={handleSubmit_l}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="Email" placeholder='Email' onChange={(e) => setEmail_l(e.target.value)} required /><FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' onChange={(e) => setPassword_l(e.target.value)} required /><FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label></label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="" onSubmit={handleSubmit}>
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="Email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required /><FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required /><FaLock className='icon' />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" required />I agree to the terms & conditions</label>
                    </div>

                    <button type="submit">Singup</button>

                    <div className="register-link">
                        <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login