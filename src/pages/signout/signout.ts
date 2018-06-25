import { Component } from '@angular/core';
import { NavController, NavParams,ViewController, IonicPage } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { PlatformLocation, Location } from '@angular/common';

@IonicPage()
@Component({
  selector: 'page-signout',
  templateUrl: 'signout.html',
})
export class SignoutPage {

  user : any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private viewCtrl: ViewController,
              public appservice : AppServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignoutPage');
  }

  ngOnInit(){
    this.user = this.appservice.user_name;
  }

  signOut(){
  	this.viewCtrl.dismiss();
    this.appservice.signOut().then((res)=>{
      console.log("response from signout function", res)
      this.navCtrl.push('home');
    })
    .catch((error)=>{
      console.log("error in signout ", error);
    })
  }

}
