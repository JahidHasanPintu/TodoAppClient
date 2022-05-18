import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const navigate= useNavigate();
     // using useref hook 
     const emailRef = useRef('');
     const passwordRef = useRef('');
     const location = useLocation();
     let errorElement;

    // Tracking path 
      let from = location.state?.from?.pathname || "/";
      const [
          signInWithEmailAndPassword,
          user1,
          loading,
          error1,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail,sending] =useSendPasswordResetEmail(auth);
      if (user1) {
          navigate(from, { replace: true });
      }
      if (user) {
          navigate(from, { replace: true });
      }
      if (error1|| error) {
          errorElement = <div>
              <p className='text-danger'>Error: {error1?.message} {error?.message} </p>
          </div>
      }
    // event handler 
    const handleSubmit = event =>{
        event.preventDefault();
        const email= emailRef.current.value;
        const password= passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
    }

    // Register form navigator 
    
    const navigateRegister =event =>{
        navigate('/register');
    }

    // Password Reset option 

    const resetPassword = async() =>{
        const email =emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
        toast('Email sent to',email);
        }else{
            toast('Please enter email address.');
        }
        
    }

    return (
        <div className='form-area'>
            <form onSubmit={handleSubmit} className='login-form'>
                {/* <!-- Email input --> */}
                <h2 className='text-center'>Login</h2>
                <div className="form-outline mb-4">
                    <input ref={emailRef} type="email" placeholder='Email address' className="form-control" required/>
                </div>

                
                <div className="form-outline mb-4">
                    <input ref={passwordRef} type="password" placeholder="Password" className="form-control" required/>
                    
                </div>
                

                
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                    
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label" > Remember me </label>
                    </div>
                    </div>

                    <div className="col">
                    
                    <b onClick={resetPassword} className='reg-button'>Forgot password?</b>
                    </div>
                    {errorElement}
                </div>

                
                <button type="submit" className="btn btn-primary btn-block mb-4">Log in</button>

                
                <div className="text-center">
                    <p>Not a member? <b onClick={ navigateRegister} className='reg-button'>Please Register</b></p>
                    <p>or sign up with:</p>
                   

                    <button onClick={() => signInWithGoogle()} type="button" className="btn btn-primary btn-block mb-4">
                    <i className="fab fa-google"></i>    sign in with google  
                    </button>
                    <ToastContainer />

                </div>
                </form>
        </div>
    );
};

export default Login;