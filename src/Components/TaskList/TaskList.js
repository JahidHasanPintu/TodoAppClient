import React from 'react';
import useTasks from '../../hooks/useTasks';
import Task from '../Task/Task';

const TaskList = () => {
    const [tasks,setTasks] = useTasks();
    
    return (
        <div className='services'>
             <h1 className='title-text'>My Services</h1>
            <div className="service-container row">
            {
                tasks?.map(task => <Task
                    key= {task.id}
                    task={task}
                >  
                       
                </Task>)
            }
            </div>
        </div>
    );
};

export default TaskList;