import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD8IEP25_rnqUHGaZ8cdpGnAi9CguDxmSM',
  authDomain: 'fantasy-league-51825.firebaseapp.com',
  databaseURL: 'https://fantasy-league-51825-default-rtdb.firebaseio.com',
  projectId: 'fantasy-league-51825',
  storageBucket: 'fantasy-league-51825.appspot.com',
  messagingSenderId: '174362395295',
  appId: '1:174362395295:web:4f2ffe465528d0b6d258aa',
  measurementId: 'G-4XSQNE61SC',
};

let firebaseDB = null;

firebase.initializeApp(firebaseConfig);

const useFirebase = () => {
  if (!firebaseDB) {
    firebaseDB = firebase.database();
  }

  // const db = firebase.database();
  
  return firebaseDB;
};

export const generateFirebaseUserId = (emailId) =>
  emailId.replaceAll('.', '_').replace('@', '-');

export const reGHenerateFirebaseUserId = (emailId) =>
  emailId.replaceAll('_', '.').replace('-', '@');

export default useFirebase;

// -----------------------------
// Trouble Shooting Methods
// -----------------------------

const createUser = () => {
  firebase
    .database()
    .ref('/users')
    .child(generateFirebaseUserId('abhin.pai@honeywell.com'))
    .set({
      name: 'Abhin Pai',
      emailId: 'abhin.pai@honeywell.com',
      password: 'Qwerty#0000',
    });
};
