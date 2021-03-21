import Users from '../data/users.json';

export const getUserInfo = (email) => {
  return Users.find((user) => user.emailId === email);
};
