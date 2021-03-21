import LeadeBoardData from '../data/leaderboard.json';
import MatchData from '../data/matches.json';
import { getUserInfo } from './getUserInfo';

const PosetiveScore = 5;
const leaderBoard = [];

const getLeaderBoard = () => {
  for (const user in LeadeBoardData) {
    let score = 0;
    let eventplayed = 0;
    const userSubmissions = LeadeBoardData[user];
    userSubmissions.map((submission, index) => {
      let match = MatchData.find((x) => x.matchId === submission.matchId);
      eventplayed++;
      if (match.winner === submission.winner) {
        score += PosetiveScore;
      }
      if (match.tossWinner === submission.tossWinner) {
        score += PosetiveScore;
      }
    });
    leaderBoard.push({
      score,
      eventplayed,
      info: getUserInfo(user),
    });
  }
  return leaderBoard.sort((a, b) => b.score - a.score);
};

export default getLeaderBoard;
