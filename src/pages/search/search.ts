import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, ToastController, PopoverController, IonicPage } from 'ionic-angular';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { BuyPage } from '../buy/buy';

import { SignoutPage } from '../signout/signout';

import { Storage } from '@ionic/storage';
import { PlatformLocation, Location } from '@angular/common';


 declare const gapi : any;

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name : 'SearchPage',
  segment : 'search/:code' 
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {


	private loadingItems: any;
	// private loadResults = false;
	private loadError = false;

	private response: any;
  private items : any;
  private items1 : any;

  private data : any;
	public auth2: any;

  myInput : string = '';
  private image : any;
  public check = true;
  private code : any;
  private loc : any;
  private itemfound : boolean;

	constructor(private popoverCtrl: PopoverController,
              public navCtrl: NavController,
              public zone: NgZone,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public toastCtrl: ToastController,
              public storage: Storage,
              l : PlatformLocation,
              location : Location) {
      // this.loc = l;
      // // console.log(window.location);
      // this.code = window.location.href;
      // console.log(this.code);
      // this.code = this.code.substr(31,36);
      // console.log(this.code);
    this.code = this.navParams.get('code');
    console.log(this.code);
    this.loc = l;

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SearchPage check1');

    this.storage.ready().then(() => {
      console.log("ionic storage is avilable");
}).catch( ()=> {this.check = false;} );
    // if(!this.storage.get('this.data'))
    //   this.loadingItems = true;
  console.log(this.check, "checking storage function");

  this.storage.get('this.data').then((data) => {
  console.log(data);
  this.items = data;
  this.items1 =data;
  if(!data)
      this.loadingItems = true;

    if(this.code != ""){
    for (let i of this.items) {
   // console.log(i.itemCode); // "4", "5", "6"
   if(i.itemCode==this.code)
   {
    console.log("item found");
    this.confirmPurchase(i);
    this.itemfound = true;
   }

  }

  if(!this.itemfound)
  {
    let toast = this.toastCtrl.create({
    message: '             Item not found',
    duration: 3000,
    position: 'bottom'
  });


  toast.present();
  }
  }

});

		 this.handleClientLoad();

	}


	ionViewWillEnter() {
    console.log('ionViewWillEnter SearchPage check');

		this.viewCtrl.showBackButton(false);
	}

	errorToast() {
      console.log('errorToast function');

	    let toast = this.toastCtrl.create({
	      message: 'Something went wrong! Please try again.',
	      showCloseButton: true,
	      closeButtonText: "OK",
	      dismissOnPageChange: true
	    });
	    toast.present();
	}



// Authentication of user to search


handleClientLoad() {
	console.log("handleClientLoad function");
	  	let that = this;
        gapi.load('client:auth2', function () {
        gapi.client.init({
           client_id: '676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'https://www.googleapis.com/auth/spreadsheets'
        }).then(function () {

          // Listen for sign-in state changes.

  				          gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);

          console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
          // this.test(true);
          that.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());



          // authorizeButton.onclick = handleAuthClick;
          // signoutButton.onclick = handleSignoutClick;
        });
        });

      }

      updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
        	//Do nothing
        			this.callScriptFunction("");

        } else {

       // *  Sign in the user upon button click.

		    	        gapi.auth2.getAuthInstance().signIn();
	                // this.navCtrl.push('SearchPage');
        }
      }





//search and display part


callScriptFunction(refresher) {

 // if(ev.target.value!=undefined && ev.target.value != "") {
  console.log(refresher);
  // if(flag){
  //     refresher.complete();
  // }

 	// this.loadingItems = true;
	this.loadError = false;
	console.log("callScriptFunction");

  console.log(gapi.auth2.getAuthInstance().currentUser.get().w3.Paa);
  this.image = gapi.auth2.getAuthInstance().currentUser.get().w3.Paa;


      var scriptId = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";

      let that = this;

       // Create execution request.
var request = {
    'function': 'search',
    'parameters': ""
    // 'devMode': true   // Optional.
};
// Make the request.
var op = gapi.client.request({
    'root': 'https://script.googleapis.com',
    'path': 'v1/scripts/' + scriptId + ':run',
    'method': 'POST',
    'body': request
});

//logging the results
  op.execute(function(resp ) {
  that.processResponse(resp);
  if (refresher!=""){
    refresher.complete();
    console.log("referesh complete");
  }

});

// }
}



processResponse(resp: any) {

this.items1 = resp.response.result;
this.response = resp.response.result;
console.log(this.response);

this.storage.set('this.data', this.items1).then( () => {
  console.log("storage set function");
});

if(Object.keys(this.response).length ==0)
	{this.loadError = true
  // this.loadingItems = false;
}
this.loadingItems = false;
this.zone.run(() => {});

}




confirmPurchase(item) {
    console.log("inside confirmPurchase");
		let product = [];
		product = item;
		let modal = this.modalCtrl.create('BuyPage',{item: product});
		console.log(item.itemName);
		modal.present();
    var stateObj = item;
    this.loc.pushState(stateObj, "BuyPage", "/#/search/" + item.itemCode);
	}




	emailPopup(){
		// let modal = this.modalCtrl.create('EmailPage');
		// modal.present();


	}

	onCancel()
	{
		console.log("cancel button");
	}


	// public callFilter(ev)
	// {
	// 	this.items = [];
	// 	console.log(this.items);
	// console.log("inside filter function");

	//    var val = ev.target.value;
 //     this.loadError = false;
 //     // console.log(this.item);

 //      //if the value is an empty string don't filter the items
 //      if (val && val.trim() != '') {
 //      this.items = this.response.filter((i) => {
 //         return (i.itemName.toLowerCase().indexOf(val.toLowerCase()) > -1);
 //       });

 //      console.log(this.items);

 //      if(Object.keys(this.items).length ==0){


 //      	this.loadError = true;
 //      }


 //  	}


 //  	else{
 //  		this.items = this.response;
 //  	}


	// }

public callFilter()
  {
    // this.items = this.items1;

    console.log(this.items);
    console.log("inside filter function");

     this.loadError = false;
     console.log(this.myInput);

      //if the value is an empty string don't filter the items
      if (this.myInput && this.myInput.trim() != '') {
      this.items = this.items1.filter((i) => {
         return (i.itemName.toLowerCase().indexOf(this.myInput.toLowerCase()) > -1);
       });


      console.log(this.items);

      if(Object.keys(this.items).length ==0){


        this.loadError = true;
      }


    }


    else{
      this.items = this.items1;

    }
    this.zone.run(() => {});

  }





  presentPopover(ev) {
    let popover = this.popoverCtrl.create('SignoutPage', {
    });
    popover.present({
      ev: ev
    });
  }


}





