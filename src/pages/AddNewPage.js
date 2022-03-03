import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { addNewTask } from '../redux/actions/TaskActions';

const AddNew = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] =useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleClear = () => {
        console.log('clean')
        setTitle(' ')
        setDescription(' ')
    }

    const isValid = () => { 
        if(title === ''){
            console.log('title invalid');
            return false
        }
        if(description === ''){
            console.log('description invalid');
            return false
        }
        return true
    }
    const handleAdd = (e) => { 
        e.preventDefault();
        if(isValid()){
            dispatch(addNewTask( title, description ))
            navigate('/')
        }
    }


    return (
        <>
            <Navbar/>
            <div className='addnew__container'>
                <h3 className='addnew__title'>Add New Task
                    <div className='addnew__line'/>
                </h3>
                <form onSubmit={ handleAdd }>
                    <div className='addnew__field'>
                        <label className='addnew__label'>Title:</label>
                        <input className='addnew__input' value={title} onChange={ e => setTitle(e.target.value)} />
                    </div>
                    <div className='addnew__field'>
                        <label className='addnew__label' >Description:</label>
                        <textarea 
                        rows="6"
                        className='addnew__textarea' 
                        value={description} 
                        onChange={ e => setDescription(e.target.value)}>
                        </textarea>
                    </div>
                    <div className='addnew__buttons'>
                        <button className='button__send' type='submit'>Add</button>
                        <button className='button__clear' type='reset' onClick={ handleClear }>Clean</button>
                    </div>
                </form>
            </div>
        </>
    )};

export default AddNew;