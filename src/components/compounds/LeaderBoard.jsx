import React, { useEffect, useState } from 'react';
import getLeaderBoard from '../../utils/getLeaderBoard';
import Header from '../atoms/Header';
import {
  FirstRankImage,
  SecondRankImage,
  ThirdRankImage,
  BadgeImage,
} from '../../assets/index';

function LeaderBoard() {
  const [leaderBoard, setLeaderBoard] = useState([]);

  useEffect(() => {
    setLeaderBoard(getLeaderBoard());
  }, []);

  const getRankingBadge = (index) => {
    switch (index) {
      case 0:
        return FirstRankImage;
      case 1:
        return SecondRankImage;
      case 2:
        return ThirdRankImage;
      default:
        return BadgeImage;
    }
  };

  return (
    <div className='leaderboard'>
      <Header title={'Leader Board'} />
      <div className='leaderboard__standings'>
        {leaderBoard.length > 0 ? (
          leaderBoard.map((standing, index) => (
            <div className='rank' key={standing.info.email}>
              <img src={getRankingBadge(index)} alt='Rank' />
              <h1>{standing.info.name}</h1>
              <p>{standing.score}</p>
              {/* <p>{standing.eventplayed}</p> */}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default LeaderBoard;
