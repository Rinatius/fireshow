import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAhOjIJpueb0Ar_Uwy90_hrp_XfN7nxVgo",
    authDomain: "friendlychat-70ad6.firebaseapp.com",
    databaseURL: "https://friendlychat-70ad6.firebaseio.com",
    projectId: "friendlychat-70ad6",
    storageBucket: "friendlychat-70ad6.appspot.com",
    messagingSenderId: "999254559438",
    appId: "1:999254559438:web:bff5aa00a459e762f85e9f"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;