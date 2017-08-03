import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { SearchPage } from '../search/search';

declare const gapi : any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public zone: NgZone, public toastCtrl: ToastController) {

  }

ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
		  this.handleClientLoad();

	}


	navigateToSearch() {
    this.navCtrl.push(SearchPage);
    console.log('Navigating to another module');
  }


	public auth2: any;
  public disabled = false;



	  handleClientLoad() {

	  	let that = this;
        gapi.load('client:auth2',()=> {
        	console.log(this);
        gapi.client.init({
           client_id: '676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com',
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
          this.navigateToSearch();

        } else {
       //            console.log(this);
       // // *  Sign in the user upon button click.

       //  	        gapi.auth2.getAuthInstance().signIn().then( () => {
       //  	        	console.log("signed in");
       //  	        	this.navigateToSearch();

       //        });


        }
      }

      signIn(){
      	            console.log(this);
       // *  Sign in the user upon button click.

        	        gapi.auth2.getAuthInstance().signIn().then( () => {
        	        	console.log("signed in");
        	        	this.navigateToSearch();

              });



      }



}
