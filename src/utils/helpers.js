export const generateFirebaseUserId = (emailId) => emailId.replaceAll('.','_').replace('@', '-')
