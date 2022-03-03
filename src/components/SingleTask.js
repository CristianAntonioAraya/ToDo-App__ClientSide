import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions/TaskActions';

const SingleTask = ({ title, description, state, id }) => {

    const dispatch = useDispatch()

    const handleDeleteTask = () => {
        dispatch(deleteTask(id))
    }


    return (
        <div className={`single__container ${state}`}>
            <div className='single__content'>
                <h3 className='single__title'>{title}</h3>
                <div className='single__icons'>
                    <FontAwesomeIcon className='single__icon' icon={faPen}/>
                    <FontAwesomeIcon className='single__icon' icon={faTrash} onClick={handleDeleteTask}/>
                    <FontAwesomeIcon className='single__icon' icon={faAngleDown}/>
                </div>
            </div>
            <div className='display'>
                <div className='single__line' />
                <p className='single__text'>{description}</p>
            </div>
        </div>
)};

export default SingleTask;
