import React, { useEffect, useState } from 'react';
import Header from '../atoms/Header';
import useAppData from '../../state/dataLayer';
import { getTodaysMatch } from '../../utils/helpers';
import TeamCard from '../molecules/TeamCard';
import Pill from '../atoms/Pill';
import Loader from '../atoms/Loader';

const QuesstionType = {
  winner: 'winner',
  tossWinner: 'tossWinner',
};

function Question() {
  const [{ matches }, dispatch] = useAppData();
  const [tomorrowMatches, setTomorrowMatches] = useState([]);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    setTomorrowMatches(getTodaysMatch(matches));
    // updatePredictions();
  }, [matches]);

  const updatePredictions = (type, teamName, matchId) => {
    // console.log(predictions);
    // const previousPredictions = predictions.find(
    //   (x) => x?.matchId === matchId && x?.[type]
    // );

    // console.log(previousPredictions);

    // if (!previousPredictions) {
    //   switch (type) {
    //     case QuesstionType.tossWinner:
    //       setPredictions(...predictions, {
    //         tossWinner: teamName,
    //         matchId,
    //       });
    //       break;
    //   }
    // } else {
    //   previousPredictions[type] = teamName;
    //   setPredictions(...predictions, previousPredictions);
    // }
    // console.log(predictions);
  };

  return (
    <section className='question-section'>
      <Header title={'Event for the day'} />
      {tomorrowMatches.length > 0 ? (
        <>
          <div className='question-section__div'>
            {tomorrowMatches.map((match, index) => (
              <div className='match-div' key={match.matchId}>
                <div className='match-div__matches'>
                  <TeamCard direction={'left'} teamName={match.team1} />
                  <p className='match-div__matches__vs'>VS</p>
                  <TeamCard direction={'right'} teamName={match.team2} />
                </div>
                <div className='question-div'>
                  <div className='question-one'>
                    <p>Who gonna win the toss?</p>
                    <div className='pill-div'>
                      <Pill
                        name={match.team1}
                        onClick={() =>
                          updatePredictions(
                            QuesstionType.tossWinner,
                            match.team1,
                            match.matchId
                          )
                        }
                      />
                      <Pill name={match.team2} />
                    </div>
                  </div>
                  <div className='question-two'>
                    <p>Who is going to win this match?</p>
                    <div className='pill-div'>
                      <Pill name={match.team1} />
                      <Pill name={match.team2} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='submission-footer'>
            <span>Submit your predection</span>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default Question;
