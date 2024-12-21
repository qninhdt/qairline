import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  getDoc,
  doc,
  deleteDoc,
  updateDoc
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
export const infosRef = collection(db, 'infos')
export const salesRef = collection(db, 'sales')
export const planesRef = collection(db, 'planes')
export const airportsRef = collection(db, 'airports')
export const flightsRef = collection(db, 'flights')
export const bookingsRef = collection(db, 'bookings')

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
  location.href = '/'
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

export async function addAirport(airport: any) {
  await addDoc(airportsRef, airport)
}

export async function addPlane(plane: any) {
  await addDoc(planesRef, plane)
}

export async function addFlight(flight: any) {
  await addDoc(flightsRef, flight)
}

export async function addBooking(booking: any) {
  await addDoc(bookingsRef, booking)
}

export async function addInfo(info: any) {
  await addDoc(infosRef, info)
}

export async function addSale(sale: any) {
  await addDoc(salesRef, sale)
}
// Fetch all airports and include their IDs
export async function getAirports() {
  const querySnapshot = await getDocs(airportsRef)
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

// Fetch all planes and include their IDs
export async function getPlanes() {
  const querySnapshot = await getDocs(planesRef)
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

// Fetch all flights and include their IDs
export async function getFlights() {
  const querySnapshot = await getDocs(flightsRef)
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

// Fetch all bookings and include their IDs
export async function getBookings() {
  const querySnapshot = await getDocs(bookingsRef)
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

// Fetch all posts and include their IDs
export async function getInfos() {
  const querySnapshot = await getDocs(infosRef)
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export async function getSales() {
  const querySnapshot = await getDocs(salesRef)
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

// Fetch an airport by ID and include its ID
export async function getAirportById(id: string) {
  const q = doc(db, 'airports', id)
  const querySnapshot = await getDoc(q)
  const d = querySnapshot
  return d ? { id: d.id, ...d.data() } : null
}

// Fetch a plane by ID and include its ID
export async function getPlaneById(id: string) {
  const q = doc(db, 'planes', id)
  const querySnapshot = await getDoc(q)
  const d = querySnapshot
  return d ? { id: d.id, ...d.data() } : null
}

// Fetch a flight by ID and include its ID
export async function getFlightById(id: string) {
  const q = doc(db, 'flights', id)
  const querySnapshot = await getDoc(q)
  const d = querySnapshot
  return d ? { id: d.id, ...d.data() } : null
}

// Fetch a booking by ID and include its ID
export async function getBookingById(id: string) {
  const q = doc(db, 'bookings', id)
  const querySnapshot = await getDoc(q)
  const d = querySnapshot
  return d ? { id: d.id, ...d.data() } : null
}

// Fetch a post by ID and include its ID
export async function getInfoById(id: string) {
  const q = doc(db, 'infos', id)
  const querySnapshot = await getDoc(q)
  const d = querySnapshot
  return d ? { id: d.id, ...d.data() } : null
}

export async function getSaleById(id: string) {
  const q = doc(db, 'sales', id)
  const querySnapshot = await getDoc(q)
  const d = querySnapshot
  return d ? { id: d.id, ...d.data() } : null
}

// Delete an airport by ID
export async function deleteAirport(id: string) {
  try {
    const q = doc(db, 'airports', id)
    const querySnapshot = await getDoc(q)

    if (!querySnapshot.exists()) {
      throw new Error(`No airport found with id: ${id}`)
    }

    await deleteDoc(q)
    console.log(`Airport with id: ${id} has been deleted.`)
  } catch (error) {
    console.error('Error deleting airport:', error)
    throw error
  }
}

// Delete a plane by ID
export async function deletePlane(id: string) {
  try {
    const q = doc(db, 'planes', id)
    const querySnapshot = await getDoc(q)

    if (!querySnapshot.exists()) {
      throw new Error(`No plane found with id: ${id}`)
    }

    await deleteDoc(q)
    console.log(`Plane with id: ${id} has been deleted.`)
  } catch (error) {
    console.error('Error deleting plane:', error)
    throw error
  }
}

// Delete a flight by ID
export async function deleteFlight(id: string) {
  try {
    const q = doc(db, 'flights', id)
    const querySnapshot = await getDoc(q)

    if (!querySnapshot.exists()) {
      throw new Error(`No flight found with id: ${id}`)
    }

    await deleteDoc(q)
    console.log(`Flight with id: ${id} has been deleted.`)
  } catch (error) {
    console.error('Error deleting flight:', error)
    throw error
  }
}

// Delete a post by ID
export async function deleteInfo(id: string) {
  try {
    const q = doc(db, 'infos', id)
    const querySnapshot = await getDoc(q)

    if (!querySnapshot.exists()) {
      throw new Error(`No info found with id: ${id}`)
    }

    await deleteDoc(q)
    console.log(`Info with id: ${id} has been deleted.`)
  } catch (error) {
    console.error('Error deleting info:', error)
    throw error
  }
}

export async function deleteSale(id: string) {
  try {
    const q = doc(db, 'sales', id)
    const querySnapshot = await getDoc(q)

    if (!querySnapshot.exists()) {
      throw new Error(`No sale found with id: ${id}`)
    }

    await deleteDoc(q)
    console.log(`Sale with id: ${id} has been deleted.`)
  } catch (error) {
    console.error('Error deleting sale:', error)
    throw error
  }
}

// Update an airport by ID
export async function updateAirport(id: string, airport: any) {
  try {
    const q = doc(db, 'airports', id)
    const querySnapshot = await getDoc(q)

    if (!querySnapshot.exists()) {
      throw new Error(`No airport found with id: ${id}`)
    }

    await updateDoc(q, airport)
    console.log(`Airport with id: ${id} has been updated.`)
  } catch (error) {
    console.error('Error updating airport:', error)
    throw error
  }
}

// Update a plane by ID
export async function updatePlane(id: string, plane: any) {
  try {
    const q = doc(db, 'planes', id)
    const querySnapshot = await getDoc(q)

    if (!querySnapshot.exists()) {
      throw new Error(`No plane found with id: ${id}`)
    }

    await updateDoc(q, plane)
    console.log(`Plane with id: ${id} has been updated.`)
  } catch (error) {
    console.error('Error updating plane:', error)
    throw error
  }
}

// Update a flight by ID
export async function updateFlight(id: string, flight: any) {
  try {
    const q = doc(db, 'flights', id)
    const querySnapshot = await getDoc(q)

    if (!querySnapshot.exists()) {
      throw new Error(`No flight found with id: ${id}`)
    }

    await updateDoc(q, flight)
    console.log(`Flight with id: ${id} has been updated.`)
  } catch (error) {
    console.error('Error updating flight:', error)
    throw error
  }
}
export async function updateBooking(id: string, booking: any) {
  try {
    const q = doc(db, 'bookings', id)
    const querySnapshot = await getDoc(q)

    if (!querySnapshot.exists()) {
      throw new Error(`No booking found with id: ${id}`)
    }

    await updateDoc(q, booking)
    console.log(`Booking with id: ${id} has been updated.`)
  } catch (error) {
    console.error('Error updating booking:', error)
    throw error
  }
}

export async function getAllCites() {
  const querySnapshot = await getDocs(airportsRef)
  return querySnapshot.docs.map((doc) => {
    const d = doc.data()
    return {
      name: d.city,
      code: d.code
    }
  })
}
