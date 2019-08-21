const admin = require('firebase-admin');
const functions = require('firebase-functions');


// If on cloud functions
if (process.env.X_GOOGLE_FUNCTION_IDENTITY) {
	admin.initializeApp(functions.config().firebase);
	//console.log('Running on cloud');
}
//if running locally
else {
	let serviceAccount = require('../tuckshop-3-firebase-adminsdk-ng72y-add169fc72.json');
	admin.initializeApp({
		credential: admin.credential.cert(serviceAccount),
		databaseURL: "https://tuckshop-3.firebaseio.com"
	});
	//console.log('Running locally');
}

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

exports.api = functions.https.onRequest(app);

exports.helloWorld = functions.https.onRequest((request, response) => {
	//OTP.genOTP();
	response.send("Hello from Firebase!");
});
