import React, { useEffect } from 'react';
import { actionShowSchedule, actionUpdateMatches } from '../../state/action';
import useAppData from '../../state/dataLayer';
import ScheduleButtonImage from '../../assets/scheduleBtn.svg';
import getTeamImage from '../../utils/getTeamImage';
import CoinImage from '../../assets/coin.svg';
import useFirebase from '../../utils/firebaseUtil';

function Schedule() {
  const [{ isScheduleDivOpen, matches }, dispatch] = useAppData();
  const dbInstance = useFirebase();

  useEffect(() => {
    dbInstance.ref('/matches').on('value', (snapshot) => {
      actionUpdateMatches(snapshot.val(), dispatch);
    });
  }, []);

  const closeDiv = () => {
    actionShowSchedule(false, dispatch);
  };

  const getMatchStatus = (match) => {
    if (!match.winner && !match.isDraw) {
      return '-';
    } else if (match.team1 === match.winner) {
      return '1 - 0';
    } else if (match.isDraw) {
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
          {matches.length > 0 ? (
            matches.map((match, index) => {
              return (
                <div className='match' key={index}>
                  <div className='match__team1'>
                    <img
                      src={getTeamImage(match.team1.toUpperCase())}
                      alt={match.team1}
                    />
                    <p>
                      {match.team1}
                      {match.tossWinner === match.team1 && (
                        <span>
                          <img src={CoinImage} alt='Toss' />
                        </span>
                      )}
                    </p>
                  </div>
                  <div className='match__status'>
                    <p>{getMatchStatus(match)}</p>
                    <span>{getDate(match.date)}</span>
                  </div>
                  <div className='match__team2'>
                    <p>
                      {match.tossWinner === match.team2 && (
                        <span>
                          <img src={CoinImage} alt='Toss' />
                        </span>
                      )}
                      {match.team2}
                    </p>
                    <img
                      src={getTeamImage(match.team2.toUpperCase())}
                      alt={match.team2}
                    />
                  </div>
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

export default Schedule;
