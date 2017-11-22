import { Component } from '@angular/core';
import { NavController, NavParams,ViewController, IonicPage } from 'ionic-angular';

// import { HomePage } from '../home/home';
import { PlatformLocation, Location } from '@angular/common';

declare const gapi : any;

/**
 * Generated class for the SignoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signout',
  templateUrl: 'signout.html',
})
export class SignoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  private user : any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignoutPage');
    this.handleClientLoad();
  }

  handleClientLoad() {

      // let that = this;
        gapi.load('client:auth2', function () {
        gapi.client.init({
          client_id : '676621258132-v9fqtd0tl50in48cmb92jht0k3be2024.apps.googleusercontent.com',
           // client_id: '676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com',
              // client_id: '164623832984-ivug8glc6tgtu0sgjbm51oigp27u0033.apps.googleusercontent.com',

        cookiepolicy: 'single_host_origin',
        // scope: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
        
        scope: 'https://www.googleapis.com/auth/spreadsheets'
        }).then(function () {



          console.log(gapi.auth2.getAuthInstance().isSignedIn.get());

        });
        });

        this.user =  gapi.auth2.getAuthInstance().currentUser.get().w3.ig;
        console.log(this.user);

      }


  signOut(){
  	this.viewCtrl.dismiss();
  	 gapi.auth2.getAuthInstance().signOut().then( ()=> {
  	 	this.navCtrl.push('HomePage');   
  	 });

  }

}
