import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCp5FIa6Xu467CClr3e6yr5LV34joGZrUw",
    authDomain: "crwn-clothing-db-b1086.firebaseapp.com",
    projectId: "crwn-clothing-db-b1086",
    storageBucket: "crwn-clothing-db-b1086.appspot.com",
    messagingSenderId: "688543234705",
    appId: "1:688543234705:web:70fd54ce9a9e3c65535d30"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
  export const dB = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(dB, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc (userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    if (!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef
  }