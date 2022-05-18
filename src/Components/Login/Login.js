
import React, { useRef } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [signInWithGoogle, user,loading, error] = useSignInWithGoogle(auth);
    const navigate= useNavigate();
     // using useref hook 
     const location = useLocation();
     let errorElement;

    // Tracking path 
      let from = location.state?.from?.pathname || "/";
      
      if (loading) {
        return <p>Loading...</p>;
    }
      
      if (user) {
          navigate(from, { replace: true });
      }
      if (error) {
          errorElement = <div>
              <p className='text-danger'>Error:{error?.message} </p>
          </div>
      }
   

    // Register form navigator 

    return (
        <div className='form-area'>

            <div className="text-center">
                <p>Please Sign in to use the TODO APP</p>
                    <button onClick={() => signInWithGoogle()} type="button" className="btn btn-primary btn-block mb-4">
                    <i className="fab fa-google"></i>    sign in with google  
                    </button>
                    

                </div>
        </div>
    );
};

export default Login;