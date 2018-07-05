import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FirebaseApp } from 'angularfire2';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { Events } from 'ionic-angular';


/*
  Generated class for the FirebaseMessagingProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
declare var Notification: any;
declare var window : any;

@Injectable()
export class FirebaseMessagingProvider {

  private messaging;
  private unsubscribeOnTokenRefresh = () => {};
  currentMessage = new BehaviorSubject(null)
  notificationsSubscribed : any;

  constructor(public http: Http,
  						private storage : Storage,
  						private app : FirebaseApp,
              public appservice : AppServiceProvider,
              private events: Events) {

    console.log('Hello FirebaseMessagingProvider Provider');
    this.messaging = app.messaging();
    navigator.serviceWorker.register('service-worker.js').then((registration) => {
	    this.messaging.useServiceWorker(registration);
	    //this.disableNotifications()
	    // this.enableNotifications();
      console.log("Check for notification permissions ==>", Notification.permission);
      if(Notification.permission == 'granted'){
        this.notificationsSubscribed = true;
        // var notification = new Notification("Welcome to Tuckshop");
        // const notificationOptions = {
        //   icon: '/assets/icon/iconx96.png',
        //   body: 'Welcome to Tuckshop'
        // };
        // var notification = {
        //   title : "Tuckshop",
        //   body : "Welcome to Tuckshop"
        // }
        // new Notification(notification.title, notificationOptions);
      }
      else if(Notification.permission == 'denied' || Notification.permission == 'default'){
        this.notificationsSubscribed = false;
      }
	    this.receiveMessage();
      // this.handleNotificationClick();
		});
  }

  public enableNotifications() {
    // console.log("get active page ==>", this.navCtrl.getActive());
    // this.events.publish("searchPage:notification", {url : 'https://tuckshop.ajency.in/#/search/400136'});
    console.log('Requesting permission...');
    return this.messaging.requestPermission().then(() => {
        console.log('Permission granted');
        this.notificationsSubscribed = true;
        this.events.publish("notification:subscribed", {notificationsSubscribed : true});
        // token might change - we need to listen for changes to it and update it
        this.setupOnTokenRefresh();
        return this.updateToken();
      });
  }

  public disableNotifications() {
    console.log("inside disableNotifications function");
    this.unsubscribeOnTokenRefresh();
    this.unsubscribeOnTokenRefresh = () => {console.log("notifications unsubscribed")};
    this.notificationsSubscribed = false;
    this.messaging.getToken().then((currentToken)=>{
      console.log("FCM token : ", currentToken);
      this.appservice.unsubscribeTopic(currentToken);
    })
  }

  private updateToken() {
    return this.messaging.getToken().then((currentToken) => {
      if (currentToken) {
        // we've got the token from Firebase, now let's store it in the database
        console.log("FCM token : ",currentToken)
        this.appservice.user_fcm_token = currentToken;
        this.appservice.storeFcmToken();
        return this.storage.set('fcmToken', currentToken);
      } else {
        console.log('No Instance ID token available. Request permission to generate one.');
      }
    });
  }

  private setupOnTokenRefresh(): void {
    this.unsubscribeOnTokenRefresh = this.messaging.onTokenRefresh(() => {
      console.log("Token refreshed");
      this.storage.set('fcmToken','').then(() => { this.updateToken(); });
    });
  }

  receiveMessage() {
       this.messaging.onMessage((payload) => {
        console.log("Message received. ", payload);
        const notificationOptions = {
          icon: '/assets/icon/iconx96.png',
          body: payload.data.body,
          requireInteraction: true,
          data : {
            url : payload.data.url
          }
        };
        let pn = new Notification(payload.data.title, notificationOptions);

        this.events.publish("searchPage : notification", {url : payload.data.url});
        // window.open(payload.data.url);  
        // pn.onclick((event)=>{
        //   console.log("Notification clicked", event);        
        //   window.open(event.notification.data.url);  
        //   pn.close();        
        // })
        this.currentMessage.next(payload)
      });

  }
  // handleNotificationClick(){
  //   Notification.onclick((event)=>{
  //     console.log("Notification clicked", event);
  //     window.open(event.notification.data.url);
  //   })
  // }
	    

}
