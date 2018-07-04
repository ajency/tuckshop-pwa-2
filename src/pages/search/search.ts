import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, ToastController, PopoverController, IonicPage, AlertController, Events } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { FirebaseMessagingProvider } from '../../providers/firebase-messaging/firebase-messaging';
import { Storage } from '@ionic/storage';
import { PlatformLocation, Location } from '@angular/common';


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
  types = [];
  notificationsSubscribed : boolean = false;

	constructor(private popoverCtrl: PopoverController,
              public navCtrl: NavController,
              public zone: NgZone,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public toastCtrl: ToastController,
              public storage: Storage,
              l : PlatformLocation,
              location : Location,
              public appservice : AppServiceProvider,
              private alertCtrl: AlertController,
              public firebasemessaging : FirebaseMessagingProvider,
              private events: Events,) {
    this.code = this.navParams.get('code');
    console.log(this.code);
    this.loc = l;

    this.notificationUpdate = (data)=>{
      console.log("inside notification update event");
      this.notificationsSubscribed = true;
    }

    this.events.subscribe('notification:subscribed',this.notificationUpdate);
	}

  private notificationUpdate : Function;

  ionViewWillLeave(){
    console.log("inside ionViewWillLeave function");
    this.events.unsubscribe('notification:subscribed',this.notificationUpdate);
  }

  ngOnInit(){
    this.notificationsSubscribed = this.firebasemessaging.notificationsSubscribed;
    console.log("ngOnInit search page");
    this.storage.get('this.data').then((data) => {     

      if(data){
        data.sort(this.sortItems);

        for(let i =0; i<data.length; i++){
          if(data[i].type == "Special"){
            let item = data[i];
            data.splice(i,1);
            data.unshift(item);
          }
        }
      }


      this.items=data;  
      this.items1=data;
      
      if(data){
          this.findTypes(data);
          setTimeout(()=>{
            document.getElementById('All').classList.add('active');
          },100)
      }
      else{
        this.loadingItems = true;
      }        

     // If the url contains the item code i.e. if it is not empty check for the item code 
     // in the locally stored data
      if(this.code != ""){
        if(this.items!=null){
          for (let i of this.items) {
             if(i.itemCode==this.code){
                console.log("item found");
                this.confirmPurchase(i);
                this.itemfound = true;
                break;
             }

          }
        }
        if(!this.itemfound){
          console.log('item not found in local storage');
          // this.handleClientLoad();
          this.callScriptFunction("");
          this.searchingdb();
          this.loadingItems = true;
        }

           // If the item is not found create a toast saying item not found 
      }

      });

      if(this.code == ""){
        console.log('item code is null', this.code);
        // this.handleClientLoad();  // Function to authenticate user
        this.callScriptFunction("");
      }
  }

  ionViewCanEnter() : Promise<boolean>{
    console.log("ionViewCanEnter search page");
    return new Promise((resolve, reject)=>{
      this.appservice.handleClientLoad().then((res)=>{
        console.log("response from handleClientLoad ", res);
        resolve(true);
      })
      .catch((error)=>{        
        reject(false);
        this.navCtrl.setRoot('home');
        console.log("error from handleClientLoad", error);
      })
    })
  }

	ionViewDidLoad() {
		console.log('ionViewDidLoad SearchPage check1');
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

//search and display part

callScriptFunction(refresher) {

	this.loadError = false;
	console.log("callScriptFunction");

  // Get the profile image of the user
  this.image = this.appservice.user_profile_pic
  console.log(this.image);

  let that = this;
  var request;
  // Create execution request.
  if(that.code == ""){
    console.log('youll get all results' );
    request = {
      'function': 'search',
      'parameters': ""
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
      };
  }
      // Make the request.
  let url = `https://content-script.googleapis.com/v1/scripts/${this.appservice.script_id}:run`

  this.appservice.request(url,'post',request,{},false,'promise').then((res)=>{
    console.log("response from search api ==>", res);
    this.processResponse(res);
    if (refresher!=""){
      refresher.complete();
      console.log("referesh complete");
    }
  })
  .catch((error)=>{
    console.log("error from search api", error);
    if (refresher!=""){
      refresher.complete();
    }
    this.loadingItems = false;
    this.requestFailedToast();
  })
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

  this.response = resp.response.result;

  //  If data is not present in local storage store repsonse in items
  if(!this.items){
      this.response.sort(this.sortItems);
      for(let i =0; i<this.response.length; i++){
        if(this.response[i].type == "Special"){
          let item = this.response[i];
          this.response.splice(i,1);
          this.response.unshift(item);
        }
      }
      this.items = this.response;
      setTimeout(()=>{
            document.getElementById('All').classList.add('active');
      },100)
  } 

  this.findTypes(this.response);

  //  Function to store the data locally i.e. in cache
  if(Object.keys(this.response).length ==1){
    this.confirmPurchase(this.response[0]);
    this.loadingItems = false;
  }

  // To avoid only one item or no item to be stored in items1 and local storage
  if(Object.keys(this.response).length !=1 && Object.keys(this.response).length !=0){
      this.response.sort(this.sortItems);
      for(let i =0; i<this.response.length; i++){
        if(this.response[i].type == "Special"){
          let item = this.response[i];
          this.response.splice(i,1);
          this.response.unshift(item);
        }
      }
      this.items1 = this.response;
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

onCancel(){
		console.log("cancel button");
}

public callFilter(){
    // console.log(this.items);
    // console.log(this.items1);
  console.log("inside filter function");
  this.loadError = false;
  console.log(this.myInput);
  //if the value is an empty string don't filter the items
  for(let i=0;i<this.types.length;i++){
    document.getElementById(this.types[i]).classList.remove("active");
  }
  document.getElementById('All').classList.add('active');
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

  findTypes(data){
    console.log("inside findTypes function");
    var flags = [], output = ["All"];
    for(let i=0;i<data.length;i++){
      if( flags[data[i].type]) continue;
      flags[data[i].type]=true;
      output.push(data[i].type);
    }
    this.types = output;
    console.log("types ===>", this.types)
  }

  filterItems(type){
    console.log("inside filterItems function", type);    
    for(let i=0;i<this.types.length;i++){
      document.getElementById(this.types[i]).classList.remove("active");
    }
    document.getElementById(type).classList.add("active");
    if(type == 'All'){
      this.items = this.items1;
    }
    else{
      this.items = this.items1.filter((item)=>{
        return item.type == type;
      })
    }    
  }

  sortItems(a,b){
    if(a.type < b.type)
      return -1
    if(a.type > b. type)
      return 1

    return 0;
  }


  notificationsAlert() {
    let alert = this.alertCtrl.create({
      title: 'Tuckshop would like to send you notifications',
      message: 'Allow Tuckshop to send notifications',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.firebasemessaging.disableNotifications();
            this.notificationsSubscribed = false;
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.firebasemessaging.enableNotifications();
            console.log('Yes clicked');
          }
        }
      ]
    });
    alert.present();
  }




}





