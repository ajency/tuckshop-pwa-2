
import { HttpModule } from "@angular/http";

import { BrowserModule } from '@angular/platform-browser';

import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';

import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// import { HomePage } from '../pages/home/home';

// import { SearchPage } from '../pages/search/search';

// import { BuyPage } from '../pages/buy/buy';

// import { SignoutPage } from '../pages/signout/signout';

import { IonicStorageModule } from '@ionic/storage';
import { AppServiceProvider } from '../providers/app-service/app-service';
import { FirebaseMessagingProvider } from '../providers/firebase-messaging/firebase-messaging';

import { AngularFireModule } from 'angularfire2';
import 'firebase/messaging';
import { ItemServiceProvider } from '../providers/item-service/item-service';
import { OrderServiceProvider } from '../providers/order-service/order-service'; 


const firebaseConfig = {
    apiKey: "AIzaSyDM8j00pSlfGnw9hEtkYHks5M9fek_lm5U",
    authDomain: "tuckshop-9efa0.firebaseapp.com",
    databaseURL: "https://tuckshop-9efa0.firebaseio.com",
    projectId: "tuckshop-9efa0",
    storageBucket: "",
    messagingSenderId: "925518089689"
};

@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    // SearchPage,
    // BuyPage,
    // SignoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
    // SearchPage,
    // BuyPage,
    // SignoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppServiceProvider,
    FirebaseMessagingProvider,
    ItemServiceProvider,
    OrderServiceProvider
  ]
})
export class AppModule {}
