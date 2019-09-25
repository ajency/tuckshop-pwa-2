
const admin = require('firebase-admin');
const functions = require('firebase-functions');


let Items;
Items = {
    /**
     * Lists all Items
     */
	list: async () => {
		let firestore = admin.firestore();
		let items = await firestore.collection('items')
		.where("in_stock", "==", true)						//filter
		.where("buyable", "==", true).where("stock",">",0)	//filter
		.get();
		let result = items.docs.map(doc => {
			return doc.data()
		})
		return result;
    },
    /**
     * gets item using id
     */
	getById: async (id) => {
		let firestore = admin.firestore();
		let item = await firestore.collection('items').doc(id)
		.where("in_stock", "==", true)						//filter
		.where("buyable", "==", true).where("stock",">",0)	//filter
		.get();
		if (item.exists)
			return item.data();
		else
			return null;
    },
    /**
     * gets item by code
     */
	getByCode: async (code) => {
		let firestore = admin.firestore();
		let items = await firestore.collection('items')
		.where('item_code', "==", code)
		.where("in_stock", "==", true)						//filter
		.where("buyable", "==", true).where("stock",">",0)	//filter
		.get();
		let result = items.docs.map(doc => {
			return doc.data()
		})
		return result;
	},
    /**
     * gets items by code
     */
	//TODO: use promise all to get all concurrently
	getByCodes: async (codes) => {
		console.log('codes', codes);
		let promises = []
		
		codes.forEach(async value =>{
			promises.push(Items.getByCode(value))
		})
		let result = await Promise.all(promises)
		return [].concat.apply([], result);
    },
    /**
     * search items by part of name
     */
	getSearchItemName: async (likeName) => {
		console.log("searching ", likeName)
		let firestore = admin.firestore();
		let users = await firestore.collection('items')
			.orderBy('name').startAt(likeName).endAt(likeName + '\uf8ff').get()
		let result = [];
		users.forEach(doc => {
			result.push(doc.data());
		})
		return result;
    },
    /**
     * create new item
     */
	create: async (data) => {
		console.log("adding item")
		let newItemData = {}
		//		newItemData.id 		= data.id;
		newItemData.name = data.name;
		newItemData.price = data.price;
		newItemData.code = data.code;

		console.log("Item details ",JSON.stringify(data));
		let firestore = admin.firestore();
		//TODO: check based on item code
		try {
			let itemRef = await firestore.collection('items').doc();
			let item = await itemRef.get();
			if (item.exists) {
				console.log('exists');
				return { 'exists': '' }
			} else {
				let success = await itemRef.set(newItemData);
				//return success;
				return newItemData;
			}
		} catch (err) {
			console.log(err)
			return { 'error': err }
		}
    },
    /**
     * update item
     */
	update: async (id, data) => {
		let newItemData = {}
		newItemData.name = data.name;
		newItemData.price = data.price;
		newItemData.item_code = data.item_code;

		let firestore = admin.firestore();
		try {
			let success = await firestore.collection('items').doc(id.toString()).update(newItemData);
			return success;
		} catch (err) {
			return { 'error': err };
		}
    },
    /**
     * delete items
     */
	delete: async id => {
		let firestore = admin.firestore();
		try {
			let success = await firestore.collection('items').doc(id.toString()).delete();
			return success;
		} catch (err) {
			return { 'error': err };
		}
	},

	// for stock entry
	getItemByCode: async (code) => {
		let firestore = admin.firestore();
		let items = await firestore.collection('items')
		.where('item_code', "==", code)
		.get();
		let result = items.docs.map(doc => {
			return doc.data()
		})
		return result;
	},

	//adjustStock
	createStockEntry: async(code, adjustment) => {
		adjustment = parseInt(adjustment);
		let firestore = admin.firestore();
		let item = await Items.getItemByCode(code);
		item = item[0];
		if (adjustment == parseInt(item.stock)) {
			return {type:'info', message: 'No changes has been done'};
		}
		let adj_type = adjustment > parseInt(item.stock)? "positive": "negative";

		let diff = 0;
		if(adjustment) {
			if (adj_type == "positive") {
			diff =  adjustment - parseInt(item.stock);
			} else {
			diff =  parseInt(item.stock) - adjustment;
			}
		}	
		try {
			let adj_doc = await firestore.collection('stock_entry').add({
				date: new Date().toISOString(),
				quantity: diff,
				item_code: code,
				adjustment_type: adj_type
			}).then((res) =>{
				console.log("Successfully created ", res.id)
			}).catch((error)=>{
				console.error("Error updating document: ", error);
			});
			return { type:"success", message: "Updated Stock"}

		 } catch(err) {
			return {type: 'error', message: err};
		 } 
		
	}
}

module.exports = Items;