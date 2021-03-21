import MIImage from '../assets/teams/mi.svg';
import RCBImage from '../assets/teams/rcb.svg';
import CSKImage from '../assets/teams/csk.svg';
import SRHImage from '../assets/teams/srh.svg';

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

export default getTeamImage;
