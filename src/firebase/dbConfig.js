import { initializeApp } from "firebase/app";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfAJNYRQ3_kiTufxLOsw6qOCuGpA1kLGk",
    authDomain: "tienda-donbigotes.firebaseapp.com",
    projectId: "tienda-donbigotes",
    storageBucket: "tienda-donbigotes.appspot.com",
    messagingSenderId: "165353622631",
    appId: "1:165353622631:web:fee1d09054bf2cba07d8c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}