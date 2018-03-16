// React firebase
import Rebase from 're-base';
import firebase from 'firebase';


// Firebase App
const firebaseApp = firebase.initializeApp({
    // Initialize Firebase
    apiKey: "AIzaSyB3mZWs9OjhVJZVDNXuWDyyTbAU1DJ8veo",
    authDomain: "catch-of-the-day-amy-wolff.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-amy-wolff.firebaseio.com" 
});


// Rebase Binding
const base = Rebase.createClass(firebaseApp.database());


// This is a named export (we know what its called)
export { firebaseApp }

// This is a default export, allows us to bring it into other files.
export default base;