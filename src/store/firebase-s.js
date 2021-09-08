var firebaseConfig = {
    apiKey: "AIzaSyB6etl04IMvhIe4w9KHA5OA_eviFGMCjkA",
    authDomain: "w2021-08-githubio.firebaseapp.com",
    projectId: "w2021-08-githubio",
    storageBucket: "w2021-08-githubio.appspot.com",
    messagingSenderId: "410573340876",
    appId: "1:410573340876:web:ab3f9b3f5e25926c948269",
    measurementId: "G-Y3H2Z7WPPR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log('firebase: ', firebase);

module.exports = {
    '_Firebase': '',
}