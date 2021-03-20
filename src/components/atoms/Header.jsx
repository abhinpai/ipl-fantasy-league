import React from 'react';
import HeaderImage from '../../assets/header.svg';

function Header({ title }) {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <div className='header__underline' > 
        <span className='one' style={{width: title.length+'rem'}} />
        <span className='two' />
        <span className='three' />
      </div>
    </div>
  );
}

export default Header;
