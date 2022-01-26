import React from 'react';
import NoteBar from '../components/NoteBar';
import Tasks from '../components/Tasks';


const HomePage = () => {

    return (
    <div className='home__container'>
        <NoteBar/>
        <Tasks/>
    </div>
    )
};

export default HomePage;
