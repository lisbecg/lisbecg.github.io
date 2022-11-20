import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js' 
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhqIalP3-K-gXgQNewWVQ5CVKDMRfsF-E",
    authDomain: "hispanicswhocollege-e3c8b.firebaseapp.com",
    databaseURL: "https://hispanicswhocollege-e3c8b-default-rtdb.firebaseio.com",
    projectId: "hispanicswhocollege-e3c8b",
    storageBucket: "hispanicswhocollege-e3c8b.appspot.com",
    messagingSenderId: "179729519037",
    appId: "1:179729519037:web:368abaf78714e3d929c2d4",
    measurementId: "G-FK5L5DPBC2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

signUp.addEventListener('click', (e)=>{

    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            alert('user created!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            alert(registerEmail);
        });

});
