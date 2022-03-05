import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, } from '@fortawesome/free-solid-svg-icons';
import { deleteTask } from '../../redux/actions/TaskActions';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

const DeleteIcon = ( { id } ) => {
    
    const dispatch = useDispatch()

    const handleDelete = async() => { 
        await Swal.fire({
            title: 'Confirm delete',
            icon: 'warning',
            iconColor: '#1A374D',
            confirmButtonColor: '#0275D8',
            cancelButtonColor: '#D9534F',
            showCancelButton: true,
            showCloseButton: true,
        })
        .then( (result) => {
            if(result.isConfirmed){
                dispatch(deleteTask(id))
                Swal.fire({
                    title: 'Task deleted!',
                    icon: 'success',
                    timer: '1500',
                    showConfirmButton: false
                })
                .then( (result => { 
                    if(result.isDismissed){
                        window.location.reload();
                    }
                }))
            }
            else{
                Swal.close()
            }
        })
    }

    return (
        <FontAwesomeIcon className='single__icon' icon={faTrash} onClick={ handleDelete }/>
    )
}

export default DeleteIcon