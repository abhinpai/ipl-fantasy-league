import React, { useEffect } from 'react';
import Question from '../components/compounds/Question';
import Schedule from '../components/compounds/Schedule';
import LeaderBoard from '../components/compounds/LeaderBoard';
import firebase from 'firebase';
import { firebaseConfig } from '../utils/getFirebaseConfig';
import Matches from '../data/matches.json';

firebase.initializeApp(firebaseConfig);
let database = firebase.database();

function Home() {
  useEffect(() => {
    // database.ref('/matches').set(Matches, (error) => {
    //   error ? console.log(error) : console.log('Data saved successfully');
    // });

    // database.ref('/matches').on('value', (snapshot) => {
    //   console.log(snapshot.val());
    // });


  }, []);
  return (
    <>
      <main className='main-page'>
        <Schedule />
        <Question />
        <LeaderBoard />
      </main>
      <div className='not-support'>
        <p>Sorry, This webapp does'nt support on any small screen device</p>
      </div>
    </>
  );
}

export default Home;
