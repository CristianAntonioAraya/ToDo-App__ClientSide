import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';

const EditIcon = () => {
  
  const dispatch = useDispatch()

  const handleEdit = () => {
    Swal.fire({
      title: "Set new state",
      html: `
            <input type="radio" id=""/>
            <label>active</label>
            <input type="radio"/>
            <label>paused</label>
            <input type="radio"/>
            <label>completed</label>
            `
    })
  }

  return (
    <FontAwesomeIcon className='single__icon' icon={faPen} onClick={ handleEdit } />
  )
}

export default EditIcon