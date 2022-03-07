import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSortDown, faFilter } from '@fortawesome/free-solid-svg-icons';

const FilterBar = () => {

    const navigate = useNavigate();

    return (
        <div className='filter__container' >
            
            <button className='button__add' onClick={ () => navigate('/new')}>
                    <div className='filter__btn-content'>
                        <p className='filter__btn-text'>Add New</p>
                        <FontAwesomeIcon className='text_secondary' icon={faPlus}/>
                    </div>
            </button>

            <button className='button__link'>
                <div className='filter__link-content'>
                    <p className='filter__btn-text'>Show all</p>
                    <FontAwesomeIcon className='filter__link-icon' icon={faSortDown}/>
                </div>
            </button>

            <button className='button__filter'>
                    <p className='filter__btn-text color_light'>Filter</p>
                    <FontAwesomeIcon className='filter__link-filter' icon={faFilter}/>
            </button>
        </div>
)};

export default FilterBar;
