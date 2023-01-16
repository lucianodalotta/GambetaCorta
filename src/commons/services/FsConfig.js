import 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { firebaseConfig } from '../config'


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const fs = getFirestore(app)

const FirebaseApp = () => ({
  getAuth: () => auth,
  getFirestore: () => fs
})

export default FirebaseApp