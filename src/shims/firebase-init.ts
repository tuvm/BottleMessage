// Native builds get the config from google-services.json GoogleService-Info.plist
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyANif15p7r2iv1Cj9U_ppVCqe5JLdLIgAg',
  authDomain: 'bottle-message-3891d.firebaseapp.com',
  projectId: 'bottle-message-3891d',
  storageBucket: 'bottle-message-3891d.appspot.com',
  messagingSenderId: '645032234963',
  appId: '1:645032234963:android:f1d526bb2c8f00364de926',
  measurementId: 'G-9BECK74F26',
};

const initializeApp = (): void => {
  firebase.initializeApp(firebaseConfig);
};

export default initializeApp;
