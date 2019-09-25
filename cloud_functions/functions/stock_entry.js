
const admin = require('firebase-admin');
const functions = require('firebase-functions');
let Items = require('./items.js');
let StockEntry;

StockEntry = {
    	//adjustStock
	createStockEntry: async(code, adjustment) => {
		adjustment = parseInt(adjustment);
		let firestore = admin.firestore();
		let item = await Items.getItemByCode(code);
		if(!item.length) {
			return {type: 'info', message: 'Item not found' };
		}
		if(isNaN(adjustment)) {
			return {type: 'error', message: 'Invalid stock entry' };
		}
		item = item[0];
		if (adjustment == parseInt(item.stock)) {
			return {type:'info', message: 'No changes has been done'};
		}
		let adj_type = adjustment > parseInt(item.stock)? "positive": "negative";

		let diff = 0;
		if (adj_type == "positive") {
			diff =  adjustment - parseInt(item.stock);
		} else {
			diff =  parseInt(item.stock) - adjustment;
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

module.exports = StockEntry;