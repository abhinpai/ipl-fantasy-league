import React from 'react';
import PlayersImage from '../assets/players.svg';
import ArrowIcon from '../assets/icons/arrow-right.svg';
import { Link } from 'react-router-dom';

function SingUp() {
  return (
    <section className='auth-section'>
      <div className='auth-section__left-col'>
        <h3>Fantasy League</h3>
        <h1>Join an amazing event with us to be a witness of fantasy league</h1>
        <input required type='text' placeholder='Your name' /> <br />
        <input required type='email' placeholder='Email Id' /> <br />
        <input required type='password' placeholder='Password' />
        <div className='auth-actions'>
          <input required type='password' placeholder='Confirm Password' />
          <div className='primary-btn auth-action__btn'>
            <img src={ArrowIcon} alt='Auth Button' />
          </div>
        </div>
        <p>
          Already have an account?
          <Link to='/signin'>SignIn</Link>from here!
        </p>
      </div>
      <div className='auth-section__right-col'>
        <img src={PlayersImage} alt='Players' />
      </div>
    </section>
  );
}

export default SingUp;
