import firebase from 'firebase';
import * as userAction from './modules/user';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBSLu5Zg94ZKPPVhUcYamKOM9f3jMdfA40',
  authDomain: 'senkou-58864.firebaseapp.com',
  databaseURL: 'https://senkou-58864.firebaseio.com',
  projectId: 'senkou-58864',
  storageBucket: 'senkou-58864.appspot.com',
  messagingSenderId: '832140685792',
});

const connectFirebase = store => {
  firebase.auth().onAuthStateChanged(user => {
    console.log(user);
    if (user) {
      // User is signed in.
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;

      store.dispatch(userAction.login(uid));
    } else {
      // User is signed out.
      const uid = user.uid;
      store.dispatch(userAction.logout(uid));
    }
  });
};

export default firebaseApp;
export { connectFirebase };
