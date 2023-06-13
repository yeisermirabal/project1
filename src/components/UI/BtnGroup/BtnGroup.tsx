import React, { ChangeEvent, useState } from 'react';

/*Styles */
import { BtnGroupContainer } from './BtnGroup.style';

/*Icons*/
import {ReactComponent as SunIcon} from "../../../global/assets/sun-icon.svg";
import {ReactComponent as MoonIcon} from "../../../global/assets/moon-icon.svg";

const BtnGroup = () => {
  const [theme, setTheme] = useState('light');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.value);
  };
  
  return (
    <BtnGroupContainer>
      <div className='btn--group'>
        <input 
          type="radio" 
          id="btn-light-theme" 
          className='btn-check' 
          name="theme-switch" 
          value="light"
          checked={theme === 'light'} 
          onChange={handleChange} 
        />
        <label className='btn btn--label btn--light' htmlFor='btn-light-theme'>
          <SunIcon />
        </label>
        <input  
          type="radio" 
          id="btn-dark-theme" 
          className='btn-check' 
          name="theme-switch" 
          value="dark"
          checked={theme === 'dark'} 
          onChange={handleChange} 
        />
        <label className='btn btn--label btn--dark' htmlFor='btn-dark-theme'>
          <MoonIcon />
        </label>
      </div>
    </BtnGroupContainer>
  );
}

export default BtnGroup;
