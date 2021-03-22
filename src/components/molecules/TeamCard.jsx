import React from 'react';
import CoinImage from '../../assets/coin.svg';
import getTeamImage from '../../utils/getTeamImage';

function TeamCard({ direction, teamName, tossWinner, isAliasRequired }) {
  return (
    <div className={direction === 'left' ? 'match__team1' : 'match__team2'}>
      {direction === 'right' && (
        <TeamName teamName={teamName} tossWinner={tossWinner} isAliasRequired={false}/>
      )}
      <img src={getTeamImage(teamName.toUpperCase())} alt={teamName} />
      {direction === 'left' && (
        <TeamName teamName={teamName} tossWinner={tossWinner} isAliasRequired={false}/>
      )}
    </div>
  );
}

const TeamName = ({ teamName, tossWinner, isAliasRequired }) => (
  <p>
    {isAliasRequired && teamName}
    {tossWinner === teamName && (
      <span>
        <img src={CoinImage} alt='Toss' />
      </span>
    )}
  </p>
);

export default TeamCard;
