import FilterBar from '../components/utils/FilterBar';
import Tasks from '../components/tasks/Tasks';
import Navbar from "../components/navigation/Navbar"



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
