import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { FirebaseApp } from 'angularfire2';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { AppServiceProvider } from '../../providers/app-service/app-service';

/*
  Generated class for the FirebaseMessagingProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseMessagingProvider {

  private messaging;
  private unsubscribeOnTokenRefresh = () => {};
  currentMessage = new BehaviorSubject(null)
  constructor(public http: Http,
  						private storage : Storage,
  						private app : FirebaseApp,
              public appservice : AppServiceProvider,) {

    console.log('Hello FirebaseMessagingProvider Provider');
    this.messaging = app.messaging();
    navigator.serviceWorker.register('service-worker.js').then((registration) => {
	    this.messaging.useServiceWorker(registration);
	    //this.disableNotifications()
	    this.enableNotifications();
	    this.receiveMessage();
		});
  }

  public enableNotifications() {
    console.log('Requesting permission...');
    return this.messaging.requestPermission().then(() => {
        console.log('Permission granted');
        // token might change - we need to listen for changes to it and update it
        this.setupOnTokenRefresh();
        return this.updateToken();
      });
  }

  public disableNotifications() {
    this.unsubscribeOnTokenRefresh();
    this.unsubscribeOnTokenRefresh = () => {};
    return this.storage.set('fcmToken','').then();
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
        this.currentMessage.next(payload)
      });

  }
	    

}
