import React from 'react';
import { actionShowSchedule } from '../../state/action';
import useAppData from '../../state/dataLayer';
import ScheduleButtonImage from '../../assets/scheduleBtn.svg'

function Schedule() {
  const [{ isScheduleDivOpen }, dispatch] = useAppData();

  const closeDiv = () => {
    actionShowSchedule(false, dispatch);
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
        <div className="match-schedule-btn" onClick={() => actionShowSchedule(!isScheduleDivOpen, dispatch)}>
          <img height={'10rem'} src={ScheduleButtonImage} alt="Schedule Button"/>
          {/* <span
            
          >
            Match Schedule
          </span> */}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
