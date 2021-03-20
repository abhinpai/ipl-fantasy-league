import React from 'react';
import { actionShowSchedule } from '../../state/action';
import useAppData from '../../state/dataLayer';
import ScheduleButtonImage from '../../assets/scheduleBtn.svg';
import MatchData from '../../data/matches.json';
import MIImage from '../../assets/teams/mi.svg';
import RCBImage from '../../assets/teams/rcb.svg';
import CSKImage from '../../assets/teams/csk.svg';
import SRHImage from '../../assets/teams/srh.svg';

const TeamImagePath = '../../assets/teams/';

function Schedule() {
  const [{ isScheduleDivOpen }, dispatch] = useAppData();

  const closeDiv = () => {
    actionShowSchedule(false, dispatch);
  };

  const getTeamImage = (team) => {
    switch (team) {
      case 'MI':
        return MIImage;
      case 'RCB':
        return RCBImage;
      case 'CSK':
        return CSKImage;
      case 'SRH':
        return SRHImage;
    }
  };

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
              <div className="match">
                <img src={getTeamImage(match.team1.toUpperCase())} alt={match.team1} />
                <img src={getTeamImage(match.team2.toUpperCase())} alt={match.team2} />
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
