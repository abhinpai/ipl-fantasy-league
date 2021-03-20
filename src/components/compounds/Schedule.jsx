import React from 'react';
import { actionShowSchedule } from '../../state/action';
import useAppData from '../../state/dataLayer';

function Schedule() {
  const [{ isScheduleDivOpen }, dispatch] = useAppData();
  return (
    <section>
      <div
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
        <span onClick={() => actionShowSchedule(!isScheduleDivOpen, dispatch)}>
          Match Schedule
        </span>
      </div>
    </section>
  );
}

export default Schedule;
