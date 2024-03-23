
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc,deleteDoc, addDoc, onSnapshot, query,  updateDoc} from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyB_E1cNAG6g_uHnJGCarvKOBuN5ZpYf9JQ",
  authDomain: "todo-8d651.firebaseapp.com",
  projectId: "todo-8d651",
  storageBucket: "todo-8d651.appspot.com",
  messagingSenderId: "929704093031",
  appId: "1:929704093031:web:273e036fea68de5578fbc2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db, collection, getDocs, doc, setDoc, addDoc,deleteDoc, onSnapshot, query,  updateDoc}