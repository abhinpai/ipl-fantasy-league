import firebase from 'firebase';

const firebaseConfig = {};

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
    .child(generateFirebaseUserId('abhin.pai@mail.com'))
    .set({
      name: 'Abhin Pai',
      emailId: 'abhin.pai@mail.com',
      password: 'Qwerty#0000',
    });
};
