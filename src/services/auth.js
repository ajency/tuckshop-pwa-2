import firebaseApp from '../components/firebase/firebase.js';

// const user = firebaseApp.auth();
firebaseApp.auth().onAuthStateChanged(function(user) {
  if (user) {
  	console.log("check user ==>", user.displayName);
    this.isAuthenticated = true;
    console.log("isAuthenticated", this.isAuthenticated);
  } else {
    this.isAuthenticated = false;
  }
});

const Auth = {
	isAuthenticated: false,
	authenticate() {
		this.isAuthenticated = true;
	},
	signout() {
		this.isAuthenticated = false;
	},
	getAuth() {
		return this.isAuthenticated
	}
};

export default Auth;