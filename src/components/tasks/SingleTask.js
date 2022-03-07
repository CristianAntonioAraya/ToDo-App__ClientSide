import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import DeleteIcon from '../icons/DeleteIcon';
import EditIcon from '../icons/EditIcon';
import Swal from 'sweetalert2';

const SingleTask = ({ title, description, state, id }) => {
    const handleShowDescription = () => {
        const show = document.getElementById(id)
        show.classList.toggle('display')
    }

    const handleShowEdit = (e) => {
        e.preventDefault()
        console.log(e.target)
        Swal.fire({
            title: 'hola'
        })
    }

    return (
        <div className={`single__container ${state}`}>
            <div className='single__content'>
                <h3 className='single__title'>{title}</h3>
                <div >
                    <EditIcon id={id}/>
                    <DeleteIcon id={id}/>
                    <FontAwesomeIcon className='single__icon' icon={faAngleDown} onClick={ handleShowDescription } />
                </div>
            </div>
            <div className='display' id={id}>
                <div className='single__line' />
                <p className='single__text'>{description}</p>
            </div>
            <form className='display' onSubmit={ handleShowEdit }  id={`edit-${id}`}>
                <label><input type='radio' name='edit'/>Paused</label>
                <label><input type='radio' name='edit'/>Important</label>
                <label><input type='radio' name='edit'/>Completed</label>
                <button>Submit</button>
            </form>
        </div>
)};

export default SingleTask;
