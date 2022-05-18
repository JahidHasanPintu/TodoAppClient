import React from 'react';

const Task = (props) => {
    const {id,name,description}=props.task;
    
    
    return (

        <div className='service col-sm-12 col-md-4'>
            <h3>{name}</h3>
            <p>{description}</p>
            
        </div>
    );
};

export default Task;