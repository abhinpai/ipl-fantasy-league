import React from 'react';
import Question from '../components/compounds/Question';
import Schedule from '../components/compounds/Schedule';
import ScroreBoard from '../components/compounds/ScroreBoard';
import { actionShowSchedule, actionUserLogin } from '../state/action';
import useAppData from '../state/dataLayer';

function Home() {
  const [{ isScheduleDivOpen }, dispatch] = useAppData();
  return (
    <main className='main-page'>
     <Schedule/>
     <Question/>
     <ScroreBoard/>
      {/* <div className='match-event-question'>*</div>
      <div className='score-board'>*</div>
      <button onClick={() => actionShowSchedule(!isScheduleDivOpen, dispatch)}>
        {isScheduleDivOpen ? 'Hide' : 'Show'}
      </button> */}
    </main>
  );
}

export default Home;
