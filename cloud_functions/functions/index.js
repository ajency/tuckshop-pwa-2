const admin = require('firebase-admin');
const functions = require('firebase-functions');
const axios = require('axios');
var { google } = require('googleapis');
const sheets = google.sheets('v4');
const spreadsheetId = '15ggzO3fN-o5FhG7UN3z9QYuNwbqFYv28-0T57q614-E';


 let serviceAccount = require('./tuckshop-3-firebase-adminsdk-ng72y-add169fc72.json');
// let serviceAccount = require('./tuckshop-3-dev-a9451679694e.json');
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

let Items = require('./items.js');
let Orders = require('./orders.js');
let StockEntry = require('./stock_entry.js');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));

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

app.get('/get-stock', async (req, res) => res.send(await Items.getStock()))

app.post('/special-orders', async (req, res) => {
	try {
		let special_orders = await Orders.getSpecialsByDate();
		return res.status(200).send({ success: true, special_orders : special_orders});
	}
	catch(error) {
		return res.status(500).send({ message: `${error.code} - ${error.message}` });
	}
})

app.post('/get-user-orders', async (req, res) => {
	try {
		const { email, start_date, end_date } = req.body;

		 //if params are missing
		if (!email || !start_date || !end_date) {
				return res.status(400).send({ message: 'Missing fields' })
		}
		let orders = await Orders.getByEmail(email,start_date,end_date);
		return res.status(200).send({ success: true, orders : orders});
	}
	catch(error) {
		return res.status(500).send({ message: `${error.code} - ${error.message}` });
	}
})

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

app.post('/adjust-stock',async(req, res)=> {
	if(req.body["item_code"]!=null && req.body["item_code"]!=undefined && req.body["item_code"].length!=0  ){
		res.send({"result": await StockEntry.createStockEntry(req.body["item_code"], req.body["adjustment"])} )
    } else {
		res.send({"error":"Item not found"})
	}
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
    		let month_year = date.toLocaleDateString("en-US", {month : 'short', year: 'numeric'})
    		month_year = month_year.replace(" ", "-");
    		// month_year = month_year.slice(1);
    		console.log("month_year ==>",month_year);
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
    				month_year, 
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
					stock : stockData.adjustment_type == "positive" ? item.stock + stockData.quantity : item.stock - stockData.quantity
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


exports.report = functions.https.onRequest(async (request, response)  => {
	let date = new Date('01-09-2019')
	let orders = await firestore.collection('orders')
				.where("created", ">", date).get();
	let result = [];
	orders.forEach(doc => {
		let obj = doc.data();
		result.push(obj);
	})
	let grouped_array = groupByItem(result, 'item_code');
	let report_array = [];
	for(let array of grouped_array){
		let product = {
			item_code : array[0].item_code,
			item_name : array[0].item_name,
			quantity : 0,
			total_amount : 0
		}
		for (let item of array){
			product.quantity += item.quantity;
			product.total_amount += item.total; 
		}
		report_array.push(product);
	}
	let res = {
		array : report_array
	}
	response.send(res);
});


function groupByItem(array, key){
	let grouped_obj = 
		array.reduce((objectsByKeyValue, obj) => {
			const value = obj[key];
			objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
			return objectsByKeyValue;
		}, {});
	let grouped_array = []
	for (var key in grouped_obj) {
		grouped_array.push(grouped_obj[key]);
	}

	return grouped_array;
}

exports.findOrderItem = functions.https.onRequest(async (request, response)=>{
	let orders = await firestore.collection('orders')
				.where("item_code", "==", "400195").get();
	let result = [];
	orders.forEach(doc => {
		let obj = doc.data();
		obj.id = doc.id;
		result.push(obj);
	})
	response.send({result});
})

app.get('/get-all-users-monthly-total', async (req, res) => {
	try {
		const { start_date, end_date } = req.query;
		admin.auth().listUsers(100)
		    .then( async (listUsersResult)=> {
			    console.log("list of users", listUsersResult.users.length)
			    // listUsersResult.users.forEach(function(userRecord) {
			    //     console.log('user', userRecord.toJSON().email);
			    //     let orders = await Orders.getByEmail(email,start_date,end_date);
			    // });
			    result = [];
			    for(let user of listUsersResult.users){
			    	console.log('user', user.toJSON().email);
			        let montly_total = await Orders.getTotalByEmail(user.toJSON().email,start_date,end_date);
			        result.push({name : user.toJSON().displayName, email :user.toJSON().email, month_total : montly_total})
			    }
			    return res.status(200).send({ success: true, result : result});
		    })
		    .catch(function(error) {
		      console.log('Error listing users:', error);
		    });
		// return res.status(200).send({ success: true, orders : orders});
	}
	catch(error) {
		return res.status(500).send({ message: `${error.code} - ${error.message}` });
	}
})

