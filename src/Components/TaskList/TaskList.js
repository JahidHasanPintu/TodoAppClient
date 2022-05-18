import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useTasks from '../../hooks/useTasks';
import './TaskList.css'


const TaskList = () => {
    const [tasks,setTasks] = useTasks();

      // Updating complete status
      const handleComplete = id =>{
          
          const isComplete=1   
          const updatedTask = {isComplete};
              // send data to the server
          
          const url = `https://todo-app-for-special-grp.herokuapp.com/tasks/${id}`;
          fetch(url, {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(updatedTask)
          })
          .then(res => res.json())
          .then(data =>{
              console.log('success', data);
              toast('Task completed');
            //   alert('Task Completed successfully!!!');  
              window.location.reload()             
          })
          
          
      }
    // Deleting tasks 
    const handleDelete = id =>{
        const proceed = window.confirm( `Are you sure want to delete`);
        if(proceed){
            const url= `https://todo-app-for-special-grp.herokuapp.com/tasks/${id}`;
        fetch(url,{
            method: 'DELETE'
            
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result);
            const remaining = tasks.filter(task=>task._id !== id);
            setTasks(remaining);
           
        })
        }
    }
    return (
        <div className='App'>
             <div class="divider">Todo List</div>
            <div className="task-card">
            {
                tasks?.map(task => 
                       <div key={task._id}>
                           {/* <h2>{task.name}</h2>
                           <p>{task.description}</p>
                           <p>{task.isComplete}</p>
                           <h2 onClick={()=> handleDelete(task._id)}>X</h2>
                           <h2 onClick={()=> handleComplete(task._id)}>U</h2> */}

                            <div class="card w-96 bg-base-100 shadow-xl mt-3 task-card-details">
                            
                            <div class="card-body items-center text-center">
                                <h2 style={{ textDecoration: task.isComplete ? 'line-through' : '' }} class="card-title">{task.name}</h2>
                                <p style={{ textDecoration: task.isComplete ? 'line-through' : '' }}>{task.description}</p>
                                <div class="card-actions">
                                <button onClick={()=> handleComplete(task._id)} class="btn btn-primary">Complete</button>
                                <button onClick={()=> handleDelete(task._id)} class="btn btn-primary">Delete </button>
                                </div>
                                
                                
                            </div>
                            </div>

                       </div>
                )
            }
            </div>
        </div>
    );
};

export default TaskList;