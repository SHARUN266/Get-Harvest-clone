// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/**
 * The Firebase configuration object.           
 * @type {object}           
 */
/**
 * The Firebase configuration object.           
 * @type {object}           
 */
const firebaseConfig = {
  apiKey: "AIzaSyAMXX4k1Pz4cii_K8A6uFln3cLAPNFsVwo",
  authDomain: "masaiprojectgetharvest.firebaseapp.com",
  projectId: "masaiprojectgetharvest",
  storageBucket: "masaiprojectgetharvest.appspot.com",
  messagingSenderId: "605135694103",
  appId: "1:605135694103:web:b5e95743a228d2bfb4ef52",
  measurementId: "G-ZENNNQ9X9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth()
export {app,auth};
