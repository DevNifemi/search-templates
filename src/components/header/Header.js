import React from 'react';
import SearchInput from './SearchInput';
import './header.styles.css'
import DropDownSelect from './DropDownSelect';

const Header = () => {

  return (
        <header className='header d-center'>
            <SearchInput/>

            <DropDownSelect/>
        </header>
  );

};

export default Header;
