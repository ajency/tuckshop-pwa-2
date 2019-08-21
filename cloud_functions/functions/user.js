
const admin = require('firebase-admin');
const functions = require('firebase-functions');


let User = {
    /**
     * Returns new unique id
     */
	getNewId: async () => {
		console.log('gen new id');
		let userRef = admin.firestore().collection('user').doc();
		//console.log('id: ', userRef.id);
		return userRef.id;
    },
    /**
     * gets user by phone number
     * @param phoneNumber users phone number
     */
	getByPhoneNumber: async phoneNumber => {
		let users = await admin.firestore().collection('user')
			.where("phone_number", "==", phoneNumber).get();

		let result = [];
		users.forEach(doc => {
			data = doc.data();
			data.id = doc.id;
			result.push(data);
		});
		return result;
    },
    /**
     * gets user by id
     * @param id users id 
     */
	getById: async id => {
		let firestore = admin.firestore();
		let user = await firestore.collection('user').doc(id).get();
		if (user.exists) {
			data = user.data();
			data.id = id;
            console.log("user data",JSON.stringify(data))
			return data;
		} else
			return null;
    },
    /**
     * create new user entry
     * @param data user data
     */
	create: async data => {
		console.log('create data param',JSON.stringify(data));
		let firestore = admin.firestore();
		let newUserData = {}
		newUserData.phone_number = data.phone_number;
		newUserData.auth = data.auth;
		newUserData.address = [];

		try {
			let userRef = await firestore.collection('user').doc(data.id);
			let success = await userRef.set(newUserData);
			return newUserData;
		} catch (err) {
			console.log("error: ",err)
			return null
		}
    },
    /**
     * removes otp part and sets verified flag
     * @param id user id
     * @param verified verified flag
     */
	markVerified: async (id, verified = false) => {
		let firestore = admin.firestore();
		let userRef = await firestore.collection('user').doc(id);
		let user = await userRef.get();
		if (user) {
			console.log('new auth json',JSON.stringify(user.data().auth));
			let auth = user.data().auth;
			if (auth.otp) delete auth.otp;
			if (auth.otp_valid_till) delete auth.otp_valid_till;
			auth.verified = verified;
			await userRef.update({ auth });
		} else {
			//error
		}
    },
    /**
     * update user data
     * @param id users id
     * @param data users new data
     */
	update: async (id, data) => {
		let newUserData = {}
		if (data.name)
			newUserData.name = data.name;
		if (data.phone_number)
			newUserData.phone_number = data.phone_number;
		if (data.auth)
			newUserData.auth = data.auth;
		if (data.address)
			newUserData.address = data.address;

		let firestore = admin.firestore();
		try {
			let success = await firestore.collection('user').doc(id.toString()).update(newUserData);
			return success;
		} catch (err) {
			return { 'error': err };
		}
    },
    /**
     * delete user by id
     * @param user id
     */
	delete: async id => {
		let firestore = admin.firestore();
		try {
			let success = await firestore.collection('user').doc(id.toString()).delete();
			return success;
		} catch (err) {
			return { 'error': err };
		}
	},
}

module.exports =  User;
