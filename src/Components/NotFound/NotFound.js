import React from 'react';
import notFoundImg from '../../images/CodePen-404-Page.gif';
import './NotFound.css';
const NotFound = () => {
    return (
        <div>
            <img className='notimg text-center' src={notFoundImg} alt="404 not found" />
        </div>
    );
};

export default NotFound;