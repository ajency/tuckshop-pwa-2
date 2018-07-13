import { Component, NgZone } from '@angular/core';
import { NavController, ToastController, IonicPage, ViewController } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { PlatformLocation } from '@angular/common';
import { FirebaseMessagingProvider } from '../../providers/firebase-messaging/firebase-messaging';

@IonicPage({
  name : 'home',
  segment : 'home' 
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private loc: any;
  public disabled = false; // variable to check if the sign in button is disabled
  notificationsSubscribed : boolean = false;

  constructor(private viewCtrl: ViewController, 
              private l : PlatformLocation ,
              public navCtrl: NavController, 
              public zone: NgZone, 
              public toastCtrl: ToastController,
              public appservice : AppServiceProvider,
              public firebasemessaging : FirebaseMessagingProvider) {
    this.loc = l;

    // this.notificationUpdate = (data)=>{
    //   console.log("inside notification update event");
    //   this.notificationsSubscribed = true;
    // }

    // this.events.subscribe('notification:subscribed',this.notificationUpdate);
  }

  // private notificationUpdate : Function;

  ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');

    var stateObj = [];
    this.loc.pushState(stateObj, "HomePage", "/#/home");
	}

  ionViewWillLeave(){
    console.log("inside ionViewWillLeave function");
    // this.events.unsubscribe('notification:subscribed',this.notificationUpdate);
  }

  ngOnInit(){
    console.log("ngOnInit home page");
    this.notificationsSubscribed = this.firebasemessaging.notificationsSubscribed;
    this.appservice.handleClientLoad().then((res) =>{
      console.log("response from handleClientLoad function");
      this.navigateToSearch();
    })
    .catch((err)=>{
      console.log("Error in login check");
    });
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter HomePage check');
    this.viewCtrl.showBackButton(false);
  }

  signIn(){
   //   Sign in the user upon button click.
   this.appservice.signIn().then((res)=>{
    console.log("response from sign in ==>", res)
    this.navigateToSearch();
   })
   .catch((error)=>{
    console.log("error in loggin in =>", error);
   }); 
  }

  navigateToSearch() {
    // Navigate to the search page and send a empty parameter to search page
    let itemCode = this.appservice.itemCode ? this.appservice.itemCode : '';
    console.log("itemCode ==>", this.appservice.itemCode);
    this.appservice.itemCode = '';
    this.navCtrl.push('SearchPage', {code : itemCode});
    console.log('Navigating to another module');
  }

  // notificationsAlert() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Tuckshop would like to send you notifications',
  //     message: 'Allow Tuckshop to send notifications',
  //     buttons: [
  //       {
  //         text: 'No',
  //         role: 'cancel',
  //         handler: () => {
  //           this.firebasemessaging.disableNotifications();
  //           this.notificationsSubscribed = false;
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Yes',
  //         handler: () => {
  //           this.firebasemessaging.enableNotifications();
  //           console.log('Yes clicked');
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }


}
