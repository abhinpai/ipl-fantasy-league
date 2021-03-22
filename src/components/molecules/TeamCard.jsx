import React from 'react';
import CoinImage from '../../assets/coin.svg';
import getTeamImage from '../../utils/getTeamImage';

function TeamCard({ direction, teamName, tossWinner }) {
  return (
    <div className={direction === 'left' ? 'match__team1' : 'match__team2'}>
      {direction === 'right' && (
        <TeamName teamName={teamName} tossWinner={tossWinner} />
      )}
      <img src={getTeamImage(teamName.toUpperCase())} alt={teamName} />
      {direction === 'left' && (
        <TeamName teamName={teamName} tossWinner={tossWinner} />
      )}
    </div>
  );
}

const TeamName = ({ teamName, tossWinner }) => (
  <p>
    {teamName}
    {tossWinner === teamName && (
      <span>
        <img src={CoinImage} alt='Toss' />
      </span>
    )}
  </p>
);

export default TeamCard;
