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
      store.dispatch(userAction.updateUsername(user.displayName || uid));
    } else {
      // User is signed out.
      const uid = user.uid;
      store.dispatch(userAction.logout(uid));
    }
  });

  firebase
    .auth()
    .getRedirectResult()
    .then(result => {
      // リダイレクトにより認証が完了した場合、↑の onAuthStateChanged が呼ばれるのでそちらで処理を行います
      // if (result.credential) {
      //   // This gives you a Google Access Token. You can use it to access the Google API.
      //   const token = result.credential.accessToken;
      // }
      // // The signed-in user info.
      // const user = result.user;
      // const uid = user.uid;
    });
};

export default firebaseApp;
export { connectFirebase };
