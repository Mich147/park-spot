import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA1gSlBYjpdYVQ3rLd5Wk3UKuT3C0JEHco',
  authDomain: 'park-spot-af234.firebaseapp.com',
  projectId: 'park-spot-af234',
  storageBucket: 'park-spot-af234.appspot.com',
  messagingSenderId: '654191380028',
  appId: '1:654191380028:web:f6d1f6ba4edba6c853e539',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
