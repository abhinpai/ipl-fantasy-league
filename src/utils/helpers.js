import { actionLoadingQuestions } from '../state/action';

export const converISOToStandard = (ISOdate) => new Date(ISOdate);

export const getTodaysMatch = (matches) => {
  const availableMatches = [];
  let today = new Date();
  // Questions for the Tomorrow's match(s)
  today.setDate(today.getDate() + 1);
  const date = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  if (matches.length > 0) {
    matches.forEach((match) => {
      let matchDate = converISOToStandard(match.date);
      if (
        matchDate.getDate() === date &&
        matchDate.getMonth() === month &&
        matchDate.getFullYear() === year
      ) {
        availableMatches.push(match);
      }
    });
  }
  return availableMatches;
};
