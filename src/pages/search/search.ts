import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, ToastController, PopoverController, IonicPage } from 'ionic-angular';
import 'rxjs/add/operator/map';

// import { BuyPage } from '../buy/buy';

// import { SignoutPage } from '../signout/signout';

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

  // private data : any;
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

    this.code = this.navParams.get('code');
    console.log(this.code);
    this.loc = l;

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SearchPage check1');

    // Function to check if the local stoarage is available
      this.storage.ready().then(() => {
      console.log("ionic storage is avilable");
      }).catch( ()=> {this.check = false;} );

      // Get the data from the local storage and store it in items and items1
      this.storage.get('this.data').then((data) => {
  
        this.items = data;
        this.items1 =data;
        console.log("check items", this.items);

        if(!data)
          this.loadingItems = true;

        // If the url contains the item code i.e. if it is not empty check for the item code 
        // in the locally stored data

        if(this.code != ""){

          if(this.items!=null){
            for (let i of this.items) {
               if(i.itemCode==this.code)
                     {
                            console.log("item found");
                            this.confirmPurchase(i);
                            this.itemfound = true;
                            break;
                     }

                }
               } 

                if(!this.itemfound){
                  console.log('item not found in local storage');
                  this.handleClientLoad();
                  this.searchingdb();
                  this.loadingItems = true;

                  
                }

           // If the item is not found create a toast saying item not found 
        }

      });

      if(this.code == ""){
        console.log('item code is null', this.code);
		 this.handleClientLoad();  // Function to authenticate user
      }
	
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

  itemnotfoundToast(){
    let toast = this.toastCtrl.create({
        message: 'Item not found',
        duration: 3000,
        position: 'bottom'
      });


    toast.present();

  }

  searchingdb(){
    let toast = this.toastCtrl.create({
        message: 'Item not found on local storage...fetching from the server...Please wait..',
        duration: 4000,
        position: 'bottom'
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
              // client_id: '164623832984-ivug8glc6tgtu0sgjbm51oigp27u0033.apps.googleusercontent.com',

        cookiepolicy: 'single_host_origin',
        scope: 'https://www.googleapis.com/auth/spreadsheets'
        }).then(function () {

          // Listen for sign-in state changes.

  				          // gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);

          console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
          // this.test(true);
          that.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());



        });
        });

      }

      updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
        	// If the user is signed in call callScriptFunction to get the data from google sheets
        			this.callScriptFunction("");

        } else {

       // *  Sign in the user .

		    	        gapi.auth2.getAuthInstance().signIn().then( () =>{
                    this.callScriptFunction("");
                  })
        }
      }





//search and display part


callScriptFunction(refresher) {


	this.loadError = false;
	console.log("callScriptFunction");

  // Get the profile image of the user
  this.image = gapi.auth2.getAuthInstance().currentUser.get().w3.Paa; 


      var scriptId = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";
      // var scriptId = "MspHiDZOV00Yjjl8SzYTDSSh_GrEu24Vl";

      let that = this;

      var request;
       // Create execution request.
       if(that.code == "")
       {
        console.log('youll get all results' );
      request = {
          'function': 'search',
          'parameters': ""
    // 'devMode': true   // Optional.
      };
  }
  else if(refresher == ""){
      console.log('only one result');
    
     request = {
          'function': 'search',
          'parameters': that.code
      };

  }
  else{
    console.log('youll get all resultsss' );
      request = {
          'function': 'search',
          'parameters': ""
    // 'devMode': true   // Optional.
      };



  }
      // Make the request.
    var op = gapi.client.request({
        'root': 'https://script.googleapis.com',
        'path': 'v1/scripts/' + scriptId + ':run',
        'method': 'POST',
        'body': request
      });

    //logging the results
      op.then(function(response ) {
      console.log(response);
      that.processResponse(response);

      if (refresher!=""){
          refresher.complete();
          console.log("referesh complete");
        }
        },function(reason){
            if (refresher!=""){
          refresher.complete();
          console.log(reason);
        }
        that.requestFailedToast();


      });

  }

requestFailedToast() {
  let toast = this.toastCtrl.create({
    message: 'Request failed!   Please check your internet connection',
    position: 'bottom',
    showCloseButton : true
  });


  toast.present();
}

processResponse(resp: any) {

  //  store the respose in items1
  
  this.response = resp.result.response.result;
 
  //  If data is not present in local storage store repsonse in items 
    if(this.items == null){
      this.items = resp.result.response.result;
      }

  console.log(this.response);

  //  Function to store the data locally i.e. in cache
  if(Object.keys(this.response).length ==1){
    this.confirmPurchase(this.response[0]);
    this.loadingItems = false;
  }


  // To avoid only one item or no item to be stored in items1 and local storage
  if(Object.keys(this.response).length !=1 && Object.keys(this.response).length !=0)
    {
      this.items1 = resp.result.response.result;;

      this.storage.set('this.data', this.items1).then( () => {
        console.log("storage set function");
      });
    }

  if(Object.keys(this.response).length ==0){
    // If there is no response set loadError to true

        if(Object.keys(this.response).length !=0){
          this.loadError = true;
        }
        
        this.itemnotfoundToast();


    }


  this.loadingItems = false;
  this.zone.run(() => {});

}




confirmPurchase(item) {
    console.log("inside confirmPurchase", item);
		let product = [];
		product = item;
		let modal = this.modalCtrl.create('BuyPage',{item: product});
		console.log(item.itemName);
		modal.present();

    // change the URL based on the item clicked
    var stateObj = [];
    this.loc.pushState(stateObj, "BuyPage", "/#/search/" + item.itemCode);
    this.zone.run(() => {});
	}




	onCancel()
	{
		console.log("cancel button");
	}



public callFilter()
  {
    // this.items = this.items1;

    console.log(this.items);
    console.log(this.items1);

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



//   callScriptFunction2() {


//   // this.loadError = false;
//   console.log("callScriptFunction2");

//   // Get the profile image of the user
//   // this.image = gapi.auth2.getAuthInstance().currentUser.get().w3.Paa; 


//       var scriptId = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";

//       let that = this;

//        // Create execution request.
//     var request = {
//           'function': 'search',
//           'parameters': this.code
//     // 'devMode': true   // Optional.
//       };

//       // Make the request.
//     var op = gapi.client.request({
//         'root': 'https://script.googleapis.com',
//         'path': 'v1/scripts/' + scriptId + ':run',
//         'method': 'POST',
//         'body': request
//       });

//     //logging the results
//       op.execute(function(resp ) {
//       that.processResponse2(resp);
     

//       });

//   }

//   processResponse2(resp: any) {

//  // this.response = resp.response.result;
//   console.log('special item is', resp.response);

//   if(resp.response == undefined)
//   {
//     this.itemnotfoundToast();
//   }
//   else{
//   this.confirmPurchase(resp.response.result)
//   }
//   this.zone.run(() => {});

// }



}





