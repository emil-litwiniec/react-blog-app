import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAvPy-awuBVwYJZ327qtI4Hcpt6jFjz_bQ",
    authDomain: "blog-app-by-emil.firebaseapp.com",
    databaseURL: "https://blog-app-by-emil.firebaseio.com",
    projectId: "blog-app-by-emil",
    storageBucket: "blog-app-by-emil.appspot.com",
    messagingSenderId: "740087978540"
};

console.log(process.env.FIREBASE_API_KEY);


firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { storage, firebase, googleAuthProvider, database as default };