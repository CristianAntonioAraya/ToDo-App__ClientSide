import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoteBar = () => {

    const navigate = useNavigate();

    return (
        <div className='notebar__container'>
            <button className='add-new__button' onClick={ () => navigate('/new')}>Add new Note</button>
            <div className='notebar__filters'>
                <button className='filter__button'>Por Fecha</button>
                <button className='filter__button'>Todos</button>
                <button className='filter-send__button'>Filtrar</button>
            </div>
        </div>
)};

export default NoteBar;
