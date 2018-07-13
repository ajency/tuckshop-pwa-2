import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { FirebaseMessagingProvider } from '../providers/firebase-messaging/firebase-messaging';
import { AppServiceProvider } from '../providers/app-service/app-service';
import { Location } from '@angular/common';

// import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('mainContent') nav: NavController;
  
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private appservice : AppServiceProvider,
              private location: Location) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.appservice.handleClientLoad().then((res)=>{
      console.log("response from handleClientLoad function", res);
      console.log("Url ==>",this.location.path(true));
      // this.rootPage = 'SearchPage';
      if(!this.location.path(true).includes('search') && !this.location.path(true).includes('specials')){
        this.nav.setRoot('SearchPage', {code : ''});
      }

      let pathparts = this.location.path(true).split('/');
      console.log("pathparts ==>", pathparts);

      if(pathparts.length == 2 && pathparts[1]== 'search'){
        this.nav.setRoot('SearchPage', {code : ''});
      }
      
    })
    .catch((error)=>{
      console.log("error from handleClientLoad function", error);
      if(this.location.path(true).includes('search')){
        let pathparts = this.location.path(true).split('/');
        console.log("pathparts", pathparts);
        if(pathparts.length == 3 && pathparts[1]=='search'){
          this.appservice.itemCode = pathparts[2];
        }
      }
      this.rootPage = 'home';
    })
  }
}

