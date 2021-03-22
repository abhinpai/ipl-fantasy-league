import React from 'react';

function Pill({ name, onClick }) {

  
  return (
    <div className='pill shine-wrap' onClick={onClick}>
      <span>{name}</span>
    </div>
  );
}

export default Pill;
