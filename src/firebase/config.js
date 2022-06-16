import { initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCTvYH3k1ry7cMpTue8TVMWxxARfVdqRmo",
    authDomain: "skater-react-desafiolatam.firebaseapp.com",
    projectId: "skater-react-desafiolatam",
    storageBucket: "skater-react-desafiolatam.appspot.com",
    messagingSenderId: "3904387730",
    appId: "1:3904387730:web:f5722eafeb17c6203ec44b",
    measurementId: "G-H4XBJR7E48"
  };


const app =  initializeApp(firebaseConfig)

const storage = getStorage(app)

export default storage