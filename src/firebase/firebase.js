import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCfi1-xYDhJBF95Hhedd8ADUIN-AkQCZ_Y",
    authDomain: "expensify-8e25d.firebaseapp.com",
    databaseURL: "https://expensify-8e25d.firebaseio.com",
    projectId: "expensify-8e25d",
    storageBucket: "expensify-8e25d.appspot.com",
    messagingSenderId: "722402476669",
    appId: "1:722402476669:web:7f2e3ea668898ba1582714",
    measurementId: "G-HWQZ734SSC"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }
