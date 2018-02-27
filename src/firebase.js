import firebase from 'firebase';
import * as userActions from './modules/user';
import * as chatActions from './modules/chat';
// firestoreを利用するためには↓が必要
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBSLu5Zg94ZKPPVhUcYamKOM9f3jMdfA40',
  authDomain: 'senkou-58864.firebaseapp.com',
  databaseURL: 'https://senkou-58864.firebaseio.com',
  projectId: 'senkou-58864',
  storageBucket: 'senkou-58864.appspot.com',
  messagingSenderId: '832140685792',
});

const db = firebase.firestore();

const connectFirebase = store => {
  firebase.auth().onAuthStateChanged(user => {
    console.log(user);
    if (user) {
      // User is signed in.
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;

      store.dispatch(userActions.login(uid));
      store.dispatch(userActions.updateUsername(user.displayName || uid));
    } else {
      // User is signed out.
      const uid = user.uid;
      store.dispatch(userActions.logout(uid));
    }
  });

  db
    .collection('chat')
    .orderBy('date')
    .onSnapshot(querySnapshot => {
      const comments = [];
      querySnapshot.forEach(doc => {
        comments.push(doc.data());
      });
      store.dispatch(chatActions.replaceComments(comments));
    });
};

export default firebaseApp;
export { connectFirebase, db };
