const admin = require('firebase-admin');
const functions = require('firebase-functions');
const axios = require('axios');
var { google } = require('googleapis');
const sheets = google.sheets('v4');
const spreadsheetId = '15ggzO3fN-o5FhG7UN3z9QYuNwbqFYv28-0T57q614-E';


let serviceAccount = require('./tuckshop-3-firebase-adminsdk-ng72y-add169fc72.json');
// If on cloud functions
if (process.env.X_GOOGLE_FUNCTION_IDENTITY) {
	admin.initializeApp(functions.config().firebase);
	//console.log('Running on cloud');
}
//if running locally
else {
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: "https://tuckshop-3.firebaseio.com"
	});
	//console.log('Running locally');
}

const firestore = admin.firestore();

const jwtClient = new google.auth.JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: [ 'https://www.googleapis.com/auth/spreadsheets' ],  // read and write sheets
})
const jwtAuthPromise = jwtClient.authorize();

//let User = require('./user.js');
let Items = require('./items.js');
let Orders = require('./orders.js');

/**
 * gets item details and saves order details
 * @param {*} data 
 */
const placeOrder = async data =>{
	console.log("param data: ", JSON.stringify(data))
	let orderDetails = {
		"user_email": data.user_email,
		"quantity" : data.quantity,
		"uid" : data.uid,
		"photoURL" : data.photoURL,
		"name" : data.name,
		"type" : data.type,
		"status" : data.status
	}
	//TODO: add user info

	//get item details
	let item = await Items.getByCode(data.item_code)

	//Expecting only 1 result
	item = item[0]
	console.log(item)

	if(item){
		//TODO: remove redundant checking 
		// //if not  buyable and not in stock
		// if(!item.buyable)	throw new Error("Item Not Buyable")		//THROW_ERROR
		// if(item.stock - data.quantity < 0)	throw new Error("Item Not In Stock")	//THROW_ERROR
		
		if(!item.in_stock)	throw new Error("Item Not In Stock")	//THROW_ERROR
		
		orderDetails.item_code	= item.item_code
		orderDetails.item_name	= item.item_name;
		orderDetails.item_price	= item.price;
		
	}else {
		throw new Error("Item Not Found")							//THROW_ERROR
	}


	//place order
	let order
	try{
		console.log("placing order ", JSON.stringify(orderDetails))
		order =await Orders.create(orderDetails)
	}catch(error){
		//TODO: throw order not placed error
		console.log("Error: ",error)
		throw new Error(error.message)							//THROW_ERROR
	}
	return order
	
}

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));

app.post('/place-order', async (req, res) => {

	let response = {
		"message_code":"",
		"message":""
	}

	try{
		let order = await placeOrder(req.body)
		response = {
			"result"		: order,
			"message_code"	: "SUCCESS",
			"message"		: "Order placed successfully "
		}
	}catch(error){
		//TODO: check errors
		console.log("Error ", error.message)
		response = {
			"message_code":"ERROR",
			"message": error.message
		}
	}
	
	res.send(response)
});

app.get('/get-items', async (req, res) => res.send(await Items.list()))
app.post('/get-items',	async (req, res) =>{
	// console.log("body ",JSON.stringify(req.body["item_code"]==null))

    if(req.body["item_code"]!=null && req.body["item_code"]!=undefined && req.body["item_code"].length!=0  ){
        res.send({"result": await Items.getByCodes(req.body["item_code"])} )
    }else{
        res.send({"result":await Items.list() }) 
    }
});

app.post('/close-special-order', async(req, res) =>{
	let response = {
		"message_code":"",
		"message":""
	}
	let order = firestore.collection('orders').doc(req.body.id);
	order.update({
		status : "closed"
	})
	.then((resp)=>{
		console.log("Doc updated successfully");
		 response = {
			"message_code"	: "SUCCESS",
			"message"		: "Order closed successfully "
		}
        res.send(response);
	})
	.catch((error)=>{
		console.error("Error updating document: ", error);
		 response = {
			"message_code"	: "ERROR",
			"message"		: error.message
		}
		res.send(response);
	})
})

exports.api = functions.https.onRequest(app);

exports.helloWorld = functions.https.onRequest((request, response) => {
	//OTP.genOTP();
	response.send("Hello from Firebase!");
});

// Listen for changes in all documents in the 'orders' collection
exports.onOrderCreate = functions.firestore
	.document('orders/{orderId}')
		.onCreate( async (snap, context) => {
    		let orderData = snap.data();
    		let date = orderData.created.toDate();
    		console.log("date ==>", date.toLocaleDateString());
			
			let dd = date.getDate();
			let mm = date.getMonth() + 1; //January is 0!
			let yyyy = date.getFullYear();

    		let foramtted_date = dd + '-' + mm + '-' + yyyy;

    		console.log("fomatted date ==>", foramtted_date)
    		let data = [
    			[ 
    				"", 
    				"", 
    				orderData.name, 
    				orderData.user_email, 
    				orderData.item_code, 
    				orderData.item_name, 
    				orderData.type, 
    				orderData.item_price, 
    				foramtted_date,
    				date.toLocaleDateString("en-US", {month : 'short', year: 'numeric'}), 
    				date.toLocaleDateString("en-US", {weekday : 'short'}), 
    				((date.toLocaleDateString("en-US", {hour : '2-digit', minute : '2-digit', second : '2-digit'})).split(',')[1]).substring(1)]
    		];

		    await jwtAuthPromise

		    let request = {
		    	spreadsheetId: spreadsheetId,
		        range: 'Team member',
		        auth: jwtClient
		    }
		    await sheets.spreadsheets.values.get(request, (err, res) => {
		    	if(err){
		    		console.log("error in reading team member sheet");
		    		return;
		    	}

		    	res.data.values.forEach((row)=>{
		    		if(row[2] === orderData.user_email){
		    			data[0][1] = row[0];
		    		}
		    	})

	    		console.log("data ==>", data);

	    		for(let i = 1; i < orderData.quantity; i++){
	    			data[i] = data[0]
	    		}

	    		writeToLogSheet(data);
	    		writeToPersistentLogs(data);
			   
		    })
});


function writeToLogSheet(data){
	//entry in logs
	request = {
        spreadsheetId: spreadsheetId,
        range: 'Log',
        valueInputOption: 'RAW',
        resource: { values: data },
        auth: jwtClient
    }
    
    // Send the request
     sheets.spreadsheets.values.append(request, (err, response) => {
        if (err) {
            console.log("error ==>",err)
            return
        }
        console.log("entry in log success");
    })
}


function writeToPersistentLogs(data){
	//entry in persistent logs
    request = {
        spreadsheetId: spreadsheetId,
        range: 'Persistent_logs',
        valueInputOption: 'RAW',
        resource: { values: data },
        auth: jwtClient
    }
    
    // Send the request
    sheets.spreadsheets.values.append(request, (err, response) => {
        if (err) {
            console.log("error ==>",err)
            return
        }
        console.log("entry in persistent success");
    })
}

// listen when a new doc is created in stocks collection
exports.onStockEntry = functions.firestore
	.document('stock_entry/{stock_id}')
		.onCreate( async (snap, context) => {
			let stockData = snap.data();
			console.log("Stock data ==>", stockData);

			let item = await Items.getItemByCode(stockData.item_code)
			item = item[0];
			console.log("item ==>",item)
			if(item){
				console.log("item found ==>", item)
				let itemRef = firestore.collection('items').doc(stockData.item_code);
				itemRef.update({
					stock : stockData.adjustment == "positive" ? item.stock + stockData.purchase_quantity : item.stock - stockData.purchase_quantity
				})
				.then((res)=>{
					console.log("Doc updated successfully");
				})
				.catch((error)=>{
					console.error("Error updating document: ", error);
				})
			}
		})



exports.onNewItemCreate = functions.firestore
	.document('items/{item_id}')
		.onCreate( async (snap, context) => {
			let item = snap.data();

			let data = [
				[
					item.item_code, item.item_name, item.type, item.price, item.description, item.in_stock, item.buyable, 0, 0 , 0
				]
			];

			await jwtAuthPromise

			writeToSheet(data, 'Item master');

		})

function writeToSheet(data, sheet_name){
	//entry in persistent logs
    let request = {
        spreadsheetId: spreadsheetId,
        range: sheet_name,
        valueInputOption: 'RAW',
        resource: { values: data },
        auth: jwtClient
    }
    
    // Send the request
    sheets.spreadsheets.values.append(request, (err, response) => {
        if (err) {
            console.log("error ==>",err)
            return
        }
        console.log("entry in sheet success");
    })
}
