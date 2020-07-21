import * as firebase from "firebase";

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

database.ref().set({
    name: 'Manan Agrawal',
    age: 19,
    isSingle: false,
    location: {
        city: 'Surat',
        country: 'India'
    }
})
    .then(() => {
    console.log('Data Saved')
    })
    .catch((e) => {
    console.log('This failed', e)
    })

database.ref().update({
    name: 'Manan',
    age: '20'
})
    .then(() => {
        console.log('Updated')
    }).catch((e) => {
        console.log('Error :(' , e)
})
// database.ref().remove()
//     .then(() => {
//         console.log("Remove succeeded.")
//     })
//     .catch((error) => {
//         console.log("Remove failed: " + error.message)
//     });