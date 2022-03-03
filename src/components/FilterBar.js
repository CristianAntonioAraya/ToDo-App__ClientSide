import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSortDown } from '@fortawesome/free-solid-svg-icons';

const FilterBar = () => {

    const navigate = useNavigate();

    return (
        <div className='filter__container' >

            <button className='button__add' onClick={ () => navigate('/new')}>
                    <div className='filter__btn-content'>
                        <p className='filter__btn-text'>Add New</p>
                        <FontAwesomeIcon className='filter__btn-icon' icon={faPlus}/>
                    </div>
            </button>

            <button className='button__link'>
                <div className='filter__link-content'>
                    <p className='filter__link-text'>Todos</p>
                    <FontAwesomeIcon className='filter__link-icon' icon={faSortDown}/>
                </div>
            </button>

            <button className='button__filter'>
                <div>
                    <p>Filtrar</p>
                </div>    
            </button>
        </div>
)};

export default FilterBar;
