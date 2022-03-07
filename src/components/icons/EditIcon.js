import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

const EditIcon = ( {id} ) => {
  
  const dispatch = useDispatch()

  const handleEdit = () => {

    const show = document.getElementById(`edit-${id}`)
    show.classList.toggle('display')
  }

  return (
    <FontAwesomeIcon className='single__icon' icon={faPen} onClick={ handleEdit} />
  )
}

export default EditIcon