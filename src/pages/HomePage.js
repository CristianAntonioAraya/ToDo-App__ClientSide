import React from 'react';
import Navbar from '../components/Navbar';
import NoteBar from '../components/NoteBar';
import Tasks from '../components/Tasks';


const HomePage = () => {

    return (
        <div className='home__container'>
            <Navbar/>
            <NoteBar/>
            <Tasks/>
        </div>
    )
};

export default HomePage;
