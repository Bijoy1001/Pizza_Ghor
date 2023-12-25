import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB-r3TOL-SPasYay3FVo-HyhxDrg7cOe7g",
  authDomain: "pizza-ghor.firebaseapp.com",
  projectId: "pizza-ghor",
  storageBucket: "pizza-ghor.appspot.com",
  messagingSenderId: "517713621793",
  appId: "1:517713621793:web:7a8e46f21dcbb6f2c98460"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
