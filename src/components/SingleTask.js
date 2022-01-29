import React from 'react';

const SingleTask = ({ title, description, state }) => {
    return (
        <div className='single__container'>
            <h3 className='single__text'>{title}</h3>
            <p className='single__text'>{description}</p>
        </div>
)};

export default SingleTask;
