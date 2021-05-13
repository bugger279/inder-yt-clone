import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyDPoFJkm9fHXS_VkVzuJl3gMNSrNQPdMpo",
   authDomain: "clone-a17e6.firebaseapp.com",
   projectId: "clone-a17e6",
   storageBucket: "clone-a17e6.appspot.com",
   messagingSenderId: "1081101064894",
   appId: "1:1081101064894:web:9f2db98bb9c79237471cef"
 };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
