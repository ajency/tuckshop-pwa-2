import { Component, NgZone } from '@angular/core';
import { NavController, ToastController, IonicPage, ViewController } from 'ionic-angular';

// import { SearchPage } from '../search/search';
import { PlatformLocation, Location } from '@angular/common';

declare const gapi : any;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private loc: any;

  constructor(private viewCtrl: ViewController, private l : PlatformLocation ,public navCtrl: NavController, public zone: NgZone, public toastCtrl: ToastController) {
    this.loc = l;
  }

ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');

      var stateObj = [];
    this.loc.pushState(stateObj, "HomePage", "/#/home");
    //Once the view loads call handle client function to authenticate the user
		  this.handleClientLoad();

	}

  ionViewWillEnter() {
    console.log('ionViewWillEnter HomePage check');

    this.viewCtrl.showBackButton(false);
  }


	navigateToSearch() {
    // Navigate to the search page and send a empty parameter to search page
    this.navCtrl.setRoot('SearchPage', {code : ''});
    console.log('Navigating to another module');
  }


	public auth2: any;
  public disabled = false; // variable to check if the sign in button is disabled



	  handleClientLoad() {

      //Function to autheticate the user using google auth2
    	let that = this;
      gapi.load('client:auth2',()=> {
    	console.log(this);
      gapi.client.init({
         client_id: '676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com',
         // client_id: '164623832984-ivug8glc6tgtu0sgjbm51oigp27u0033.apps.googleusercontent.com',

         cookiepolicy: 'single_host_origin',
         scope: 'https://www.googleapis.com/auth/spreadsheets'
        }).then( () => {


          // gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);

          console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
          console.log(that);
          // this.test(true);
          that.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          // authorizeButton.onclick = handleAuthClick;
          // signoutButton.onclick = handleSignoutClick;
        });
        });

      }


      updateSigninStatus(isSignedIn) {
          console.log(this);
        // this.zone.run(() => {});
        if (isSignedIn) {

          console.log(this,"Already signed in");

          // If the user is already signed in navigate the user to search page
          this.navigateToSearch();

        } 
      }

      signIn(){

       //   Sign in the user upon button click.

      	        gapi.auth2.getAuthInstance().signIn().then( () => {
    	        	console.log("signed in");
    	        	this.navigateToSearch();

              });

        }



}
