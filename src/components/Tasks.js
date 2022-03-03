import SingleTask from "./SingleTask";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTask } from "../redux/actions/TaskActions";
import { useEffect } from "react";


const Tasks = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTask())    
    }, []);

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
                        <SingleTask key={task._id} title={task.title} description={task.description} state={task.state} id={task._id}/>               
                    ))
                }
            </div>
        )
    }

};

export default Tasks;
