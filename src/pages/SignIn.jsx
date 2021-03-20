import React from 'react';
import PlayersImage from '../assets/players.svg';
import ArrowIcon from '../assets/icons/arrow-right.svg';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <section className='signin-section'>
      <div className='signin-section__left-col'>
        <h3>Fantasy League</h3>
        <h1>Join an amazing event with us to be a witness of fantasy league</h1>
        <input type='text' placeholder='Email Id' /> <br />
        <div className='signin-actions'>
          <input type='password' placeholder='Password' />
          <div className='primary-btn signin-action__btn'>
            <img src={ArrowIcon} alt='Singin Button' />
          </div>
        </div>
        <p>
          Don't have an account?
          <Link to='/signup'>Signup</Link>from here
        </p>
      </div>
      <div className='signin-section__right-col'>
        <img src={PlayersImage} alt='Players' />
      </div>
    </section>
  );
}

export default SignIn;
