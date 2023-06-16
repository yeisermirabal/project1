import React, { ChangeEvent } from 'react';

/*Styles */
import { BtnGroupContainer } from './BtnGroup.style';

/*Icons*/
import {ReactComponent as SunIcon} from "../../../global/assets/sun-icon.svg";
import {ReactComponent as MoonIcon} from "../../../global/assets/moon-icon.svg";

/*Types */
import { HeaderProps } from '../../../global/utils/Types';

const BtnGroup = ({ toggleTheme, currentTheme }: HeaderProps) => {
  return (
    <BtnGroupContainer>
      <div className='btn--group'>
        <input
          type="radio"
          id="btn-light-theme"
          className='btn-check'
          name="theme-switch"
          value="light"
          checked={currentTheme === 'light'}
          onChange={toggleTheme}
        />
        <label className='btn primary btn--label btn--light' htmlFor='btn-light-theme'>
          <SunIcon />
        </label>
        <input
          type="radio"
          id="btn-dark-theme"
          className='btn-check'
          name="theme-switch"
          value="dark"
          checked={currentTheme === 'dark'}
          onChange={toggleTheme}
        />
        <label className='btn primary btn--label btn--dark' htmlFor='btn-dark-theme'>
          <MoonIcon />
        </label>
      </div>
    </BtnGroupContainer>
  );
}

export default BtnGroup;
