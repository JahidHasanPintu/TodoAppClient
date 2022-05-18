
import React, { useRef, useState } from 'react';

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
            
            // toast('task added successfully');
        })
        
        
        // console.log(JSON.stringify(taskData));
    };
    return (
        <div>
            <div>
              <section className='add-items-form'>
                <form onSubmit={handleAddTask}>
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                    <div className="row">
                        <div className="col text-center title">
                        <h1>ADD NEW task</h1>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col mt-4">
                        <input  ref={nameRef} type="text" className="form-control" placeholder="task Name" required/>
                        </div>
                    </div>
                    <div className="row align-items-center mt-4">
                        <div className="col">
                        
                        <textarea ref={descriptionRef} name="" id="" cols="32" rows="5" className="form-control" placeholder='Task description' required></textarea>
                        </div>
                    </div>
                    <div className="row justify-content-start mt-4">
                        <div className="col text-center">                      
                        <button className="btn btn-primary mb-4">Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </form>
            </section>
        </div>
        </div>
    );
};

export default AddNewTask;