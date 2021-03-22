import React, { useState } from 'react';
import PlayersImage from '../assets/players.svg';
import ArrowIcon from '../assets/icons/arrow-right.svg';
import { Link, useHistory } from 'react-router-dom';
import useAppData from '../state/dataLayer';
import { actionUserLogin } from '../state/action';
import { errorToast, successToast } from '../components/molecules/Notification';
import useFirebase, { generateFirebaseUserId } from '../utils/firebaseUtil';
import { Collections, localStorageKeys } from '../utils/constants';

const defaulCredential = {
  emailId: '',
  password: '',
};

function SignIn() {
  const [credential, setCredential] = useState(defaulCredential);
  const [, dispatch] = useAppData();
  const dbInstance = useFirebase();
  const history = useHistory();

  const signInUser = () => {
    if (credential.password === '' || credential.emailId === '') {
      errorToast({
        title: 'Invalid user details',
        message: 'Come on you need to have a valid credential to get in!',
      });
    } else {
      dbInstance
        .ref(Collections.users)
        .child(generateFirebaseUserId(credential.emailId))
        .on('value', (snapshot) => {
          onSiginIn(snapshot.val());
        });
    }
  };

  const onSiginIn = (snapshot) => {
    if (
      snapshot?.emailId !== credential.emailId &&
      snapshot?.password !== credential.password
    ) {
      error();
    } else if (snapshot?.emailId !== credential.emailId) {
      error();
    } else if (credential.password !== snapshot?.password) {
      error();
    } else {
      successToast({
        title: 'Successfully signed in',
        message: 'Welcome to the Fantasy League',
      });
      const userInfo = JSON.stringify({
        emailId: snapshot.emailId,
        name: snapshot.name,
      });
      localStorage.setItem(localStorageKeys.user, userInfo);
      actionUserLogin(JSON.parse(userInfo), dispatch);
      history.replace('/');
    }
    setCredential(defaulCredential);
  };

  const error = () =>
    errorToast({
      title: 'Invalid credentials',
      message: 'Please try again with vaid credentials',
    });

  return (
    <section className='auth-section'>
      <div className='auth-section__left-col'>
        <h3>Fantasy League</h3>
        <h1>Join an amazing event with us to be a witness of fantasy league</h1>
        <input
          value={credential.emailId}
          onChange={(e) =>
            setCredential({ ...credential, emailId: e.target.value })
          }
          required
          type='email'
          placeholder='Email Id'
        />{' '}
        <br />
        <div className='auth-actions'>
          <input
            value={credential.password}
            onChange={(e) =>
              setCredential({ ...credential, password: e.target.value })
            }
            required
            type='password'
            placeholder='Password'
          />
          <div className='primary-btn auth-action__btn' onClick={signInUser}>
            <img src={ArrowIcon} alt='Auth Button' />
          </div>
        </div>
        <p>
          Don't have an account?
          <Link to='/signup'>Signup</Link>from here!
        </p>
      </div>
      <div className='auth-section__right-col'>
        <img src={PlayersImage} alt='Players' />
      </div>
    </section>
  );
}

export default SignIn;
