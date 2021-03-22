import React, { useState } from 'react';
import PlayersImage from '../assets/players.svg';
import ArrowIcon from '../assets/icons/arrow-right.svg';
import { Link, useHistory } from 'react-router-dom';
import useFirebase from '../utils/firebaseUtil';
import { Collections, EmailRegx } from '../utils/constants';
import { generateFirebaseUserId } from '../utils/helpers';
import { errorToast, successToast } from '../components/molecules/Notification';

const defaultUserState = {
  name: '',
  emailId: '',
  password: '',
  cPassword: '',
};

function SignUp() {
  const [user, setUser] = useState(defaultUserState);
  const dbInstance = useFirebase();
  const histroy = useHistory();

  const signUpNewUser = () => {
    console.log(user);

    if (
      user.password === '' ||
      user.cPassword === '' ||
      user.name === '' ||
      user.emailId === ''
    ) {
      errorToast({
        title: 'Invalid user details',
        message: 'Come on you need to have a legit details to signup',
      });
    } else if (user.password.length < 4 || user.cPassword.length < 4) {
      errorToast({
        title: 'Password is very week',
        message: 'Try with strong password',
      });
    } else if (user.cPassword !== user.password) {
      errorToast({
        title: 'Password Mismatch',
        message: 'Please verify the password and give a shot',
      });
    } else if (!EmailRegx.test(user.emailId)) {
      errorToast({
        title: 'Invalid email id',
        message: 'Looks like this sort of email never exist!',
      });
    } else if (user.name.length < 3) {
      errorToast({
        title: 'Very short username',
        message: 'You gotta really short name huah!',
      });
    } else {
      dbInstance
        .ref(Collections.users)
        .child(generateFirebaseUserId(user.emailId))
        .set({ ...user, cPassword: null }, onRegistration);
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
        title: 'Successfully signed up',
        message: "You're one step away to start the event",
      });
      setUser(defaultUserState);
      histroy.push('/signin');
    }
  };

  return (
    <section className='auth-section'>
      <div className='auth-section__left-col'>
        <h3>Fantasy League</h3>
        <h1>Join an amazing event with us to be a witness of fantasy league</h1>
        <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
          type='text'
          placeholder='Your name'
        />{' '}
        <br />
        <input
          value={user.emailId}
          onChange={(e) => setUser({ ...user, emailId: e.target.value })}
          required
          type='email'
          placeholder='Email Id'
        />{' '}
        <br />
        <input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
          type='password'
          placeholder='Password'
        />
        <div className='auth-actions'>
          <input
            value={user.cPassword}
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
