import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc
} from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { reactive } from 'vue'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAZtthwxbnsYDatj3Ren78sHm8-K4MMu44',
  authDomain: 'qairline-4a43c.firebaseapp.com',
  projectId: 'qairline-4a43c',
  storageBucket: 'qairline-4a43c.firebasestorage.app',
  messagingSenderId: '416684046533',
  appId: '1:416684046533:web:a31a66fcbce03fedf118ac',
  measurementId: 'G-421Z4YHML2'
})

export const user = reactive({
  uid: '',
  email: '',
  name: '',
  isAdmin: false
})

const db = getFirestore(firebaseApp)

export const auth = getAuth(firebaseApp)

export const usersRef = collection(db, 'users')
export const postsRef = collection(db, 'posts')
export const planesRef = collection(db, 'planes')
export const airportsRef = collection(db, 'airports')
export const flightsRef = collection(db, 'flights')
export const bookingsRef = collection(db, 'bookings')
export const routesRef = collection(db, 'routes')

auth.onAuthStateChanged(async (u: any) => {
  if (u) {
    await updateUserData(u.email)
  }
})

export async function checkUserExistsByEmail(email: string) {
  const q = query(usersRef, where('email', '==', email))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.length > 0
}

async function updateUserData(email: string) {
  const q = query(usersRef, where('email', '==', email))
  const querySnapshot = await getDocs(q)
  const user_ = querySnapshot.docs[0]

  user.uid = user_.data().uid
  user.email = user_.data().email
  user.name = user_.data().name
  user.isAdmin = user_.data().email == 'admin@qairline.com'
}

export async function logout() {
  await auth.signOut()
  location.reload()
}

export async function loginWithEmailAndPassword(
  email: string,
  password: string
) {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    // await updateUserData(email)
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

export async function registerWithEmailAndPassword(rawUser: any) {
  try {
    await createUserWithEmailAndPassword(auth, rawUser.email, rawUser.password)

    await addDoc(collection(db, 'users'), {
      authProvider: 'local',
      name: rawUser.fullname,
      email: rawUser.email
    })

    // await updateUserData(rawUser.email)

    return true
  } catch (err) {
    console.error(err)
    return false
  }
}
