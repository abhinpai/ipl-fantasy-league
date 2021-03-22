import React, { useEffect } from 'react';
import { actionShowSchedule, actionUpdateMatches } from '../../state/action';
import useAppData from '../../state/dataLayer';
import ScheduleButtonImage from '../../assets/scheduleBtn.svg';
import useFirebase from '../../utils/firebaseUtil';
import { Collections } from '../../utils/constants';
import TeamCard from '../molecules/TeamCard';

function Schedule() {
  const [{ isScheduleDivOpen, matches }, dispatch] = useAppData();
  const dbInstance = useFirebase();

  useEffect(() => {
    if (matches.length === 0) {
      dbInstance.ref(Collections.matches).on('value', (snapshot) => {
        actionUpdateMatches(snapshot.val(), dispatch);
      });
    }
  }, []);

  const closeDiv = () => {
    actionShowSchedule(false, dispatch);
  };

  const getMatchStatus = (match) => {
    if (match.winner === 'null' && match.isDraw === 'null') {
      return '-';
    } else if (match.team1 === match.winner) {
      return '1 - 0';
    } else if (match.isDraw && match.isDraw !== 'null') {
      return 'Draw';
    } else {
      return '0 - 1';
    }
  };

  const getDate = (matchDate) => new Date(matchDate).toDateString();

  return (
    <section>
      <div
        onClick={closeDiv}
        className={
          isScheduleDivOpen
            ? 'match-schedule--active'
            : 'match-schedule--inactive'
        }
      ></div>
      <div
        className={
          isScheduleDivOpen
            ? 'match-schedule-drawer--active'
            : 'match-schedule-drawer--inactive'
        }
      >
        <div className='match-schedule'>
          {matches?.length > 0 ? (
            matches.map((match, index) => {
              return (
                <div className='match' key={index}>
                  <TeamCard
                    direction={'left'}
                    teamName={match.team1}
                    tossWinner={match.tossWinner}
                  />
                  <div className='match__status'>
                    <p>{getMatchStatus(match)}</p>
                    <span>{getDate(match.date)}</span>
                  </div>
                  <TeamCard
                    direction={'right'}
                    teamName={match.team2}
                    tossWinner={match.tossWinner}
                  />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div
          className='match-schedule-btn'
          onClick={() => actionShowSchedule(!isScheduleDivOpen, dispatch)}
        >
          <img src={ScheduleButtonImage} alt='Schedule Button' />
        </div>
      </div>
    </section>
  );
}

export default React.memo(Schedule);
