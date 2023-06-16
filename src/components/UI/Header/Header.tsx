import React from 'react';

/*Components */
import BtnGroup from '../BtnGroup';

/*Styles */
import { HeaderContainer } from './Header.style';

/*Icons*/
import {ReactComponent as Logo} from "../../../global/assets/logo.svg";

/*Types */
import { HeaderProps } from '../../../global/utils/Types';


const Header = ({ toggleTheme, currentTheme }: HeaderProps) => {
  return (
    <HeaderContainer>
      <div className='container'>
        <div className='header--wrapper'>
          <div className='header--brand'>
            <Logo />
          </div>
          <ul className='header--navbar'>
            <BtnGroup toggleTheme={toggleTheme} currentTheme={currentTheme} />
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
