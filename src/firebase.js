import firebase from "firebase";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyD_gPaBxR930myIMjvGJ5tWjO3m_Z8jyS8",
    authDomain: "twitter-f84c6.firebaseapp.com",
    databaseURL: "https://twitter-f84c6.firebaseio.com",
    projectId: "twitter-f84c6",
    storageBucket: "twitter-f84c6.appspot.com",
    messagingSenderId: "843460442593"
};
firebase.initializeApp(config);

export default firebase;