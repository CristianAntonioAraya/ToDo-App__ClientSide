import { useState} from 'react';
import { isDark, isLight, LocalTheme } from '../../utils/LocalTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const SwitchButton = () => {

  const [theme, setTheme] = useState('light');

    LocalTheme();

  const handleSwitchTheme = () => {
    if(theme === 'light'){
      isDark();
      setTheme('dark')
    }
    if(theme === 'dark'){
      isLight();
      setTheme('light')
    }
  }

  return (
    <button className='switch__button' onClick={handleSwitchTheme}>
      <FontAwesomeIcon className='switch__icon moon' icon={ faMoon }/>
      <FontAwesomeIcon className='switch__icon sun' icon={ faSun }/>  
      <div className={theme==='light' ? 'switch__circle switch__circle-light' : 'switch__circle switch__circle-dark'}/>
      


    </button>
)};

export default SwitchButton;
