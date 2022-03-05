import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import DeleteIcon from '../icons/DeleteIcon';
import EditIcon from '../icons/EditIcon';

const SingleTask = ({ title, description, state, id }) => {
    const handleShowDescription = () => {
        const show = document.getElementById(id)
        show.classList.toggle('display')
    }

    return (
        <div className={`single__container ${state}`}>
            <div className='single__content'>
                <h3 className='single__title'>{title}</h3>
                <div className='single__icons'>
                    <EditIcon />
                    <DeleteIcon id={id}/>
                    <FontAwesomeIcon className='single__icon' icon={faAngleDown} onClick={ handleShowDescription } />
                </div>
            </div>
            <div className='display' id={id}>
                <div className='single__line' />
                <p className='single__text'>{description}</p>
            </div>
        </div>
)};

export default SingleTask;
