import React, { useEffect } from 'react';
import Question from '../components/compounds/Question';
import Schedule from '../components/compounds/Schedule';
import LeaderBoard from '../components/compounds/LeaderBoard';
import firebase from 'firebase';
import Matches from '../data/matches.json';
import useFirebase from '../utils/firebaseUtil';

function Home() {
  const dbInstance = useFirebase();

  useEffect(() => {
    // Matches.map(x =>{
    //   // database.ref('/matches'+ x.matchId).set(x, (error) => {
    //   //   error ? console.log(error) : console.log('Data saved successfully');
    //   // });
    // })
    // database.ref('/matches').set(Matches, (error) => {
    //   error ? console.log(error) : console.log('Data saved successfully');
    // });

    dbInstance.ref('/matches').on('value', (snapshot) => {
      console.log(snapshot.val());
    });
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
