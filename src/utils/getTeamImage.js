import {
  MIImage,
  RCBImage,
  CSKImage,
  SRHImage,
  KKRImage,
  DCImage,
  RRImage,
  PANJABImage,
} from '../assets/teams/index.js';

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
    case 'DC':
      return DCImage;
    case 'RR':
      return RRImage;
    case 'KKR':
      return KKRImage;
    case 'PANJAB':
      return PANJABImage;
  }
};

export default getTeamImage;
