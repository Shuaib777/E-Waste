// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBedTlyYqsS2mE9QLuleybK3dwXJ_9AU9w",
  authDomain: "e-waste-71612.firebaseapp.com",
  projectId: "e-waste-71612",
  storageBucket: "e-waste-71612.appspot.com",
  messagingSenderId: "626296394652",
  appId: "1:626296394652:web:21d04e594819cb1bb1ae59",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const database = getDatabase(app);
export const refdb = ref;
