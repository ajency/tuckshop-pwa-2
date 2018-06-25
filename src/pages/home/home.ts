import { Component, NgZone } from '@angular/core';
import { NavController, ToastController, IonicPage, ViewController } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { PlatformLocation } from '@angular/common';

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

  constructor(private viewCtrl: ViewController, 
              private l : PlatformLocation ,
              public navCtrl: NavController, 
              public zone: NgZone, 
              public toastCtrl: ToastController,
              public appservice : AppServiceProvider) {
    this.loc = l;
  }

ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');

    var stateObj = [];
    this.loc.pushState(stateObj, "HomePage", "/#/home");
	}
  ngOnInit(){
    console.log("ngOnInit home page");
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
    this.navCtrl.push('SearchPage', {code : ''});
    console.log('Navigating to another module');
  }


}
