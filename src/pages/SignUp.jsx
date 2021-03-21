import React, { useState } from 'react';
import PlayersImage from '../assets/players.svg';
import ArrowIcon from '../assets/icons/arrow-right.svg';
import { Link, useHistory } from 'react-router-dom';
import useFirebase from '../utils/firebaseUtil';
import { Collections, EmailRegx } from '../utils/constants';
import { generateFirebaseUserId } from '../utils/helpers';
import { errorToast, successToast } from '../components/molecules/Notification';

function SignUp() {
  const [user, setUser] = useState({});
  const dbInstance = useFirebase();
  const histroy = useHistory();

  const signUpNewUser = () => {
    if (user.cPassword !== user.password) {
      errorToast({
        title: 'Password mismatch',
        message: 'Please verify the password',
      });
    }

    if (!EmailRegx.test(user.emailId)) {
      errorToast({
        title: 'Invalid email id',
        message: 'TBU',
      });
    } else {
      dbInstance
        .ref(Collections.users)
        .child(generateFirebaseUserId(user.emailId))
        .set(user, onRegistration);
    }
  };

  const onRegistration = (error) => {
    if (error) {
      errorToast({
        title: 'Failed to signup',
        message: 'Please try again after sometime!',
      });
    } else {
      successToast({
        title: 'Successfully to signup',
        message: 'TBU',
      });
      setUser({});
      histroy.push('/signin');
    }
  };

  return (
    <section className='auth-section'>
      <div className='auth-section__left-col'>
        <h3>Fantasy League</h3>
        <h1>Join an amazing event with us to be a witness of fantasy league</h1>
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
          type='text'
          placeholder='Your name'
        />{' '}
        <br />
        <input
          onChange={(e) => setUser({ ...user, emailId: e.target.value })}
          required
          type='email'
          placeholder='Email Id'
        />{' '}
        <br />
        <input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
          type='password'
          placeholder='Password'
        />
        <div className='auth-actions'>
          <input
            onChange={(e) => setUser({ ...user, cPassword: e.target.value })}
            required
            type='password'
            placeholder='Confirm Password'
          />
          <div className='primary-btn auth-action__btn' onClick={signUpNewUser}>
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

export default SignUp;
