import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDDgiOFZlD_JleIyWbGusyPIasX3c-83AM',
	authDomain: 'testovoe-womanup-b81f4.firebaseapp.com',
	projectId: 'testovoe-womanup-b81f4',
	storageBucket: 'testovoe-womanup-b81f4.appspot.com',
	messagingSenderId: '561880125323',
	appId: '1:561880125323:web:343716882907ea0ef1698e',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const todosCollection = collection(db, 'todos')
