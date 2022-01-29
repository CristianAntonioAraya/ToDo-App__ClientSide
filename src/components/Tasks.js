import SingleTask from "./SingleTask";
import { useSelector } from 'react-redux';


const Tasks = () => {

    const { tasks } = useSelector( state => state.task)

    if(tasks === null){
        return ( 
            <div>
                Loading
            </div>
        )
    }
    else{
        return (
            <div className="tasks__container">
                {
                    tasks.map( task => (        
                        <SingleTask key={task._id} title={task.title} description={task.description} state={task.state}/>               
                    ))
                }
            </div>
        )
    }

};

export default Tasks;
