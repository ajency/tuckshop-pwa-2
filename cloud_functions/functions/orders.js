const admin = require('firebase-admin');
const functions = require('firebase-functions');

let Orders = {
	list: async () => {
		let firestore = admin.firestore();
		let orders = await firestore.collection('orders').get();
		let result = [];
		orders.forEach(doc => {
			result.push(doc.data());
		})
		return result;
	},
	getById: async (id) => {
		let firestore = admin.firestore();
		let order = await firestore.collection('orders').doc(id).get();
		if (order.exists)
			return order.data();
		else
			return {};
	},
	//  2017-07-18/2020-07-19
	getByEmail: async (email, starttime, endtime) => {
		console.log("get by email params email:",email, " starttime: ", starttime, " endtime: ", endtime);
		let firestore = admin.firestore();
		let users = await firestore.collection('orders').where("user_email", "==", email);
		if (starttime != null)
			starttime = new Date(starttime);	// ("2017-07-18");
		users = await users.where("created", ">=", starttime);
		if (endtime != null)
			endtime = new Date(endtime);		// ("2020-07-19");
		users = await users.where("created", "<=", endtime);
		users = await users.get();
		// .where('name','==',"melwyn")
		let result = [];
		users.forEach(doc => {
			result.push(doc.data());
			// console.log(doc.id)
		})
		return result;
	},
	getTotalByEmail: async (email, starttime, endtime) => {
		console.log("get total by email params email:",email, " starttime: ", starttime, " endtime: ", endtime);
		let firestore = admin.firestore();
		let users = await firestore.collection('orders').where("user_email", "==", email);
		if (starttime != null)
			starttime = new Date(starttime);	// ("2017-07-18");
		users = await users.where("created", ">=", starttime);
		if (endtime != null)
			endtime = new Date(endtime);		// ("2020-07-19");
		users = await users.where("created", "<=", endtime);
		users = await users.get();
		// .where('name','==',"melwyn")
		let result = [];
		let total = 0;
		users.forEach(doc => {
			let data = doc.data();
			result.push(data);
			total += data.item_price * data.quantity;
			// console.log(doc.id)
		})
		return {
			"list": result,
			"total": total
		};
    },
    /**
     * Create new order
     */
	create: async (data) => {
		console.log("inside create order", JSON.stringify(data))
		//TODO: handling if some values are undefined
		let newOrderData = {};
		newOrderData.user_email = data.user_email;
		if(data.user_id)	newOrderData.user_id	= data.user_id;
		if(data.user_name)	newOrderData.user_name	= data.user_name;
		if(data.name) newOrderData.name 	= data.name;
		if(data.type) newOrderData.type 	= data.type;
		if(data.status) newOrderData.status 	= data.status;
		
		newOrderData.item_code	= data.item_code;
		newOrderData.item_name	= data.item_name;
		newOrderData.item_price	= data.item_price;
		newOrderData.uid 		= data.uid;
		newOrderData.photoURL 	= data.photoURL;


		newOrderData.quantity = data.quantity;

		//Calculate total
		newOrderData.total = newOrderData.item_price * newOrderData.quantity;

		//TODO: remove temprorary timestamp 
		//only to keep track of order in which orders are placed
		newOrderData.created = admin.firestore.FieldValue.serverTimestamp(); 
		// data.modified = admin.firestore.FieldValue.serverTimestamp();

		console.log("order data ", JSON.stringify(newOrderData));
		let firestore = admin.firestore();
		
		try {
			let orderRef	= firestore.collection('orders').doc();
			let itemRef		= firestore.collection('items').doc(newOrderData.item_code); 
			//let success	= await orderRef.set(newOrderData);
			//TODO: Update the stock


			let transaction = await firestore.runTransaction(async t => {
				let item = await t.get(itemRef)
				item = item.data()
				console.log("item fetched ", item)
				if(item.buyable!= true) throw new Error("Item not Buyable")
				if(item.stock - newOrderData.quantity < 0) throw new Error("Not Enough in stock")
				try{
					let orderSuccess = await orderRef.set(newOrderData)
				}catch(error){
					console.log("ERROR: ", error)
					throw new Error("Order Save Failed")
				}
				let newStock = (item.stock - newOrderData.quantity)
				try{
					let itemUpdate  = await t.update(itemRef, {"stock":  newStock})
				}catch(error){
					console.log("ERROR: ", error)
					throw new Error("Failed to update item stock")
				}
			})

			console.log("Transaction Success")
			

		} catch (error) {
			throw new Error(error.message)
		}
		return newOrderData;
	},
	update: async (id, data) => {
		let newOrderData = {};
		newOrderData.quantity = data.quantity;
		newOrderData.modified = admin.firestore.FieldValue.serverTimestamp();

		let firestore = admin.firestore();
		// data.modified = admin.firestore.FieldValue.serverTimestamp();
		try {
			let success = await firestore.collection('orders').doc(id.toString()).update(newOrderData);
			return success;
		} catch (err) {
			return { 'error': err };
		}
	},
	delete: async id => {
		let firestore = admin.firestore();
		try {
			let success = await firestore.collection('orders').doc(id.toString()).delete();
			return success;
		} catch (err) {
			return { 'error': err };
		}
	},

	getSpecialsByDate : async () => {
		let firestore = admin.firestore();
		let today = new Date();
		let specials = await firestore.collection('orders')
				.where("type", "==", "Special")
				.where("created", ">", today).get();
		let result = [];
		specials.forEach(doc => {
			let obj = doc.data();
			obj.id = doc.id;
			result.push(obj);
		})
		return result;
	}
}

module.exports = Orders;
