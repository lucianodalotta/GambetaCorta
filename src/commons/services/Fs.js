import FirebaseApp from './FsConfig'
import { collection, addDoc, getDocs, query } from "firebase/firestore"; 
const fs = FirebaseApp().getFirestore()
 
const FirebaseFs = () => ({
  addNewUser: async (user) => {
    try {
      const docRef = await addDoc(collection(fs, "users"), {
        userAccess: user.uid,
        name: user.displayName,
        email: user.email,
        cratedAt: new Date()
      });
    
      if (docRef) {
        return true
      }
    } catch (err) {
      return false
    }
    return false
  },
  
  isValid: async (token) => {
    try {
      const q = query(collection(fs, "users"));
      const querySnapshot = await getDocs(q);
      let aux = false;
      querySnapshot.forEach((doc) => {
        if (doc.data().email === token) {
          aux = true;
        }
      });
      return aux;

    } catch (err) {
      return false;
    }
  },

  getUserRef: () => fs.getAuth().currentUser,
})

export default FirebaseFs
