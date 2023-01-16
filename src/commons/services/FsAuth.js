import FirebaseApp from './FsConfig'
import FirebaseFs from './Fs'
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const auth = FirebaseApp().getAuth()
const fs = FirebaseFs()
const provider = new GoogleAuthProvider();

export async function GoogleSignIn() {
  signInWithPopup(auth, provider)
  .then(async (result) => {
    const user = result.user
    const res = await fs.isValid(user.email);
    if (!res) {
      GoogleSignOut();
      localStorage.setItem('user', false);
    }
    localStorage.setItem('user', true);
    localStorage.setItem('userName', user.displayName);

    window.location.reload();

  }).catch((error) => {

  });
}
     
export async function GoogleSignOut() {
  signOut(auth).then(() => {
    console.log('Singout succefull');
    localStorage.setItem('user', false);
  }).catch((error) => {
    
  });
}

export async function GoogleSignUp() {
  signInWithPopup(auth, provider)
  .then(async (result) => {
    const user = result.user
    const isNew = await fs.isValid(user.email);
    if (!isNew) {
      const res = await fs.addNewUser(user);
      if (res) console.log('Singup succefull');
    }
    localStorage.setItem('user', true);
  }).catch((error) => {
    
  });
}