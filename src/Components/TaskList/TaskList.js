import React from 'react';
import useTasks from '../../hooks/useTasks';


const TaskList = () => {
    const [tasks,setTasks] = useTasks();

      // Updating quantity
    //   const quantityRef = useRef('');
      const handleComplete = id =>{
          
          const isComplete=1
          // for fron end show 
          
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
              alert('Task Completed successfully!!!');
              // event.target.reset();
              
              
              
          })
          
          
      }
    
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
           //  update.handleUpdate(_id);
        })
        }
    }
    return (
        <div className='services'>
             <h1 className='title-text'>Task List</h1>
            <div className="service-container row">
            {
                tasks?.map(task => 
                       <div key={task._id}>
                           <h2>{task.name}</h2>
                           <p>{task.description}</p>
                           <p>{task.isComplete}</p>
                           <h2 onClick={()=> handleDelete(task._id)}>X</h2>
                           <h2 onClick={()=> handleComplete(task._id)}>U</h2>

                       </div>
                )
            }
            {/* {
                tasks?.map(task => <Task
                    key= {task.id}
                    task={task}
                >  
                       
                </Task>)
            } */}
            </div>
        </div>
    );
};

export default TaskList;