// Configuration for Firebase
import firebase from 'firebase'; 

const config = {
	apiKey: "",
    authDomain: "quirioapp.firebaseapp.com",
    databaseURL: "https://quirioapp.firebaseio.com",
    projectId: "quirioapp",
    storageBucket: "quirioapp.appspot.com",
    messagingSenderId: "141279243632"
}; 

const fireb = firebase.initializeApp(config); 
export default fireb; 



