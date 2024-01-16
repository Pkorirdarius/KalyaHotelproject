// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut ,onAuthStateChanged} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRKzr1rUZI-xuUATDFc1bcVIglaYiZ1t4",
  authDomain: "kalya-travel.firebaseapp.com",
  projectId: "kalya-travel",
  storageBucket: "kalya-travel.appspot.com",
  messagingSenderId: "1051544410206",
  appId: "1:1051544410206:web:d8d9c318d9aa526cb3fccf",
  measurementId: "G-XW1G5YZN3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

const signOutButtonEl = document.getElementById("sign-out-btn")

signInWithGoogleButtonEl.addEventListener("click", ()=>{
  console.log("sign in with google")
})
onAuthStateChanged(auth, email ,password)

createAccountButtonEl.addEventListener("click", ()=>{
  const email = emailInputEl.value
  const password = passwordInputEl.value
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    clearAuthFields()
    showLoggedInView()
  })
  .catch((error) => {
    console.error(error.message);
    // ..
  });
})
signInButtonEl.addEventListener('click', ()=>{
  const email = emailInputEl.value
  const password = passwordInputEl.value
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    clearAuthFields()
    // Loggin view is displayed after successful login
    showLoggedInView()
  })
  .catch((error) => {
    console.error(error.message)
  });
})
signOutButtonEl.addEventListener('click', ()=>{
  signOut(auth).then(() => {
    clearAuthFields()
    showLoggedOutView()
  }).catch((error) => {
    // An error happened.
    console.error(error.message)
  })
});
/* == Functions - UI Functions == */

function showLoggedOutView() {
  hideView(viewLoggedIn)
  showView(viewLoggedOut)
}

function showLoggedInView() {
  hideView(viewLoggedOut)
  showView(viewLoggedIn)
}

function showView(view) {
  view.style.display = "flex" 
}

function hideView(view) {
  view.style.display = "none"
}

function clearInputField(field) {
field.value = ""
}

function clearAuthFields() {
clearInputField(emailInputEl)
clearInputField(passwordInputEl)
}
// auth.onAuthStateChanged(firebaseUser => {
  //   if (firebaseUser) {
    // User is signed in, so they should see the home page.
    // Hide the login page and show the user's content, etc.
    // ...
    // We also want to register listeners here for when the user signs out.
    // auth.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      // Send token to your backend server via HTTPS
      // ... that verifies the token with Firebase Auth.
      // }).catch(function(error) {
        // Handle error
        // });
        // } else {
          // No user is signed in, so show them the login page.
          // Hide the home page and show the login page, etc.
          // ...
          // There is no user logged in, so we can show the login page.
          // };