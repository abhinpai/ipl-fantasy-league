import React from 'react';
import Question from '../components/compounds/Question';
import Schedule from '../components/compounds/Schedule';
import ScroreBoard from '../components/compounds/ScroreBoard';

function Home() {
  return (
    <>
      <main className='main-page'>
        <Schedule />
        <Question />
        <ScroreBoard />
      </main>
      <div className='not-support'>
        <p>Sorry, This webapp does'nt support on any small screen device</p>
      </div>
    </>
  );
}

export default Home;
