import React from 'react';
import { actionShowSchedule } from '../../state/action';
import useAppData from '../../state/dataLayer';
import ScheduleButtonImage from '../../assets/scheduleBtn.svg';
import MatchData from '../../data/matches.json';
import getTeamImage from '../../utils/getTeamImage';
import CoinImage from '../../assets/coin.svg';

function Schedule() {
  const [{ isScheduleDivOpen }, dispatch] = useAppData();

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
          {MatchData.map((match, index) => {
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
          })}
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
