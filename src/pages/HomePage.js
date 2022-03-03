import React from 'react';
import FilterBar from '../components/FilterBar';
import Tasks from '../components/Tasks';
import Navbar from "../components/Navbar"



const HomePage = () => {

    return (
        <div className='home__container'>
            <Navbar/>
            <FilterBar/>
            <div className='home__tasks'>
                <Tasks/>
            </div>
        </div>
    )
};

export default HomePage;
