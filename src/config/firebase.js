import App from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdu_eGAbl75kwv3YhJEQP1NYHbdR7T-x0",
  authDomain: "fir-hookstut.firebaseapp.com",
  databaseURL: "https://fir-hookstut.firebaseio.com",
  projectId: "fir-hookstut",
  storageBucket: "fir-hookstut.appspot.com",
  messagingSenderId: "745220709991",
  appId: "1:745220709991:web:b67b8c5b151e3e431c3ec2",
  measurementId: "G-8DTDC3QLP0"
};

class Firebase {
  constructor() {
    App.initializeApp(firebaseConfig);
    this.auth = App.auth();
    this.db = App.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  async register(firstName, lastName, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: firstName + lastName
    });
  }

  logout() {
    return this.auth.signOut();
  }

  getUser() {
    return this.auth.currentUser();
  }
  authChange(user) {
    return this.auth.onAuthStateChanged(user);
  }
}

export default new Firebase();
