import React from 'react';
import Question from '../components/compounds/Question';
import Schedule from '../components/compounds/Schedule';
import LeaderBoard from '../components/compounds/LeaderBoard';

function Home() {
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
