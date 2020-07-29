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

export { firebase, database as default }

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val  =snapshot.val();
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data : ', e)
//     })

// database.ref().set({
//     name: 'Manan Agrawal',
//     age: 19,
//     stressLevel: 4,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     location: {
//         city: 'Surat',
//         country: 'India'
//     }
// })
//     .then(() => {
//     console.log('Data Saved')
//     })
//     .catch((e) => {
//     console.log('This failed', e)
//     })
//
// database.ref().update({
//     name: 'Manan',
//     age: '20'
// })
//     .then(() => {
//         console.log('Updated')
//     }).catch((e) => {
//         console.log('Error :(' , e)
// })
// database.ref().remove()
//     .then(() => {
//         console.log("Remove succeeded.")
//     })
//     .catch((error) => {
//         console.log("Remove failed: " + error.message)
//     });