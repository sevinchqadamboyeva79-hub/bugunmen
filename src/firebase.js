import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getDoc, setDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDCFVLr2jDGxscED9ZJ2VAg6VTALDtZek0",
  authDomain: "bugunmen-7f8f9.firebaseapp.com",
  projectId: "bugunmen-7f8f9",
  storageBucket: "bugunmen-7f8f9.firebasestorage.app",
  messagingSenderId: "368207513742",
  appId: "1:368207513742:web:693c2c6635fb1675b521df"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export async function updateStreak(userId) {
  const userRef = doc(db, 'users', userId)
  const snap = await getDoc(userRef)
  const data = snap.data() || {}
  const today = new Date().toDateString()
  const yesterday = new Date(Date.now() - 86400000).toDateString()

  let streak = data.streak || 0
  if (data.lastPlayedDate === today) return streak
  if (data.lastPlayedDate === yesterday) streak += 1
  else streak = 1

  await setDoc(userRef, {
    ...data,
    streak,
    lastPlayedDate: today,
  }, { merge: true })

  return streak
}