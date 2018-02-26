import firebase from 'firebase';
import * as userAction from './modules/user';

const firebaseApp = firebase.initializeApp({});

const connectFirebase = store => {};

export default firebaseApp;
export { connectFirebase };
