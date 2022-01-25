import {useEffect, useState} from 'react';
import { isDark, isLight, LocalTheme } from '../utils/LocalTheme';

const SwitchButton = () => {

  const [theme, setTheme] = useState('light');

    LocalTheme();
    
    useEffect(() => {
      setTheme(localStorage.getItem('theme'));
    }, []);

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
    <button className='switch__button' onClick={handleSwitchTheme}>Switch theme</button>
)};

export default SwitchButton;
