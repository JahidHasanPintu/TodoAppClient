
import { signOut } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddNewTask.css'

const AddNewTask = () => {

    // using use ref hook to take input data
        const nameRef = useRef('');
        const descriptionRef = useRef('');
        

            // taking user input function 
    const handleAddTask = event => {

        event.preventDefault();
        const taskData = {
        name : nameRef.current.value,
        description : descriptionRef.current.value,
        isComplete : 0
        }
        
        const url= `https://todo-app-for-special-grp.herokuapp.com/tasks`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result);
            
            window.location.reload()
            
            
            toast('task added successfully');
        })
        
        
        // console.log(JSON.stringify(taskData));
    };
    //logout 
    const logOut = () => {
        signOut(auth)
        
    }
    return (
        <div>
            <div>
            <button onClick={logOut} class="btn btn-active mt-2">Logout</button>
              <section className='form'>
                <form onSubmit={handleAddTask} className='text-center'>
                <input type="text" ref={nameRef} placeholder="Task Name" class="input input-bordered input-primary w-full max-w-xs mt-2" required/> <br />
                <input type="text" ref={descriptionRef} placeholder="Description here"  class="input input-bordered input-primary w-full max-w-xs mt-2" required/> <br />
                <button className="btn btn-primary text-center mt-2">Add New</button>
                 
                </form>
                
            </section>
        </div>
        </div>
    );
};

export default AddNewTask;