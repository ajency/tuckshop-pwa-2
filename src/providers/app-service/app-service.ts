import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { ToastController, LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/map';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

declare const gapi : any;


@Injectable()
export class AppServiceProvider {

	client_id = "676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com"
	// client_id = "424476852000-562ov6kfvkoljht8gnocsaiiv0s1o2k3.apps.googleusercontent.com" // tuckshop copy test

	script_id = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";
	// script_id = "MjTVF50mrNfjX0_kvuCTT1aAvZzphd5k5"; // tuckshop copy test
	public auth2: any;
	user_profile_pic : any;
	bearer_token : any;
	user_email : any;
	user_name : any;
	user_fcm_token : any;
	handleError : any;
	loader : any;
  unsubscribeTopicCall : any;
  storeFcmTokenCall : any;

  constructor(public http: Http,
			  public toastCtrl: ToastController,
			  public loadingCtrl: LoadingController) {
    console.log('Hello AppServiceProvider Provider');
    this.handleError = (error: any): Promise<any> => {
        console.warn('error in request fetch',error)
        console.log(error.status);

        let prerror = this.parseRejectedError(error);
        return Promise.reject(prerror);
    }
  }

	handleClientLoad() : Promise <any>{
		console.log("handleClientLoad function");
		let that = this;
		return new Promise((resolve, reject) => {
			gapi.load('client:auth2', function () {
	        gapi.client.init({
	           client_id: that.client_id,
			       cookiepolicy: 'single_host_origin',
	        	 scope: 'https://www.googleapis.com/auth/spreadsheets'
	        }).then(function () {
	          // Listen for sign-in state changes.
	          // gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);
		          console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
		          
		          // that.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
		          if(gapi.auth2.getAuthInstance().isSignedIn.get()){
		          	console.log("user info =>", gapi.auth2.getAuthInstance().currentUser.get())
		          	that.user_profile_pic = gapi.auth2.getAuthInstance().currentUser.get().w3.Paa;
		          	that.bearer_token = gapi.auth2.getAuthInstance().currentUser.get().Zi.access_token;
		          	that.user_email = gapi.auth2.getAuthInstance().currentUser.get().w3.U3;
				    that.user_name = gapi.auth2.getAuthInstance().currentUser.get().w3.ig;
				    that.storeFcmToken();
		          	resolve(true);
		          }
		          else{
		          	reject(false);
		          }
	        })
	        .catch(function (){
	        	console.log("Error in login");
	        	reject(false);
	        });
		  });
    });
	}

  signIn() : Promise<any>{
  	return new Promise((resolve, reject)=>{
  		gapi.auth2.getAuthInstance().signIn().then( (res) => {
				console.log("signed in");
				console.log("user info", res);
				// this.navigateToSearch();
				this.user_profile_pic = gapi.auth2.getAuthInstance().currentUser.get().w3.Paa;
      			this.bearer_token = gapi.auth2.getAuthInstance().currentUser.get().Zi.access_token;
      			this.user_email = gapi.auth2.getAuthInstance().currentUser.get().w3.U3;
      			this.user_name = gapi.auth2.getAuthInstance().currentUser.get().w3.ig;
      			this.storeFcmToken();
				resolve(true);
			})
			.catch((error)=>{
				console.log("Error in google sign function", error);
				reject(false);
			});
  	})

  }

  public request(url: string,type: string, body: object, optionalHeaders: object = {},overrideheaders: boolean = false, returntype: string = 'promise',): any{

    let headers = new Headers({'Content-Type': 'application/json','Authorization': "Bearer "+this.bearer_token});
    console.log(headers);
    let opHeaderKeys = Object.keys(optionalHeaders);
    if(opHeaderKeys.length){
      if(overrideheaders){
        headers = new Headers(optionalHeaders);
      }
      else{
        for(let key of opHeaderKeys){
          headers.append(key,optionalHeaders[key]);
        }
      }

    }

		let httpEvent;
		if(type == 'get'){
		  httpEvent = this.http.get(url,{headers: headers});
		}
		else if(type == 'post'){
		  httpEvent = this.http.post(url,body,{headers: headers})
		}
		else if(type == 'put'){
		  httpEvent = this.http.put(url,body,{headers: headers})
		}

		if(returntype == 'promise'){
		  return httpEvent
		  .toPromise()
		  .then((response) => {
		   return response.json()
		 })
		  .catch(this.handleError);
		}
		else{
		  return httpEvent
		  .map((response) => {
		   return response.json()
		 })
		  .catch(this.handleError);
		}
	}

	public parseRejectedError(error: any): any{
    try{
      return JSON.parse(error._body);
    }
    catch(e){
      return error;
    }
  }

  signOut() : Promise<any>{
  	return new Promise((resolve, reject)=>{
  		gapi.auth2.getAuthInstance().signOut().then( ()=> {
  			resolve(true);
  	 	})
  	 	.catch((error)=>{
  	 		reject(false);
  	 	});
  	})
  }

  public presentToast(message: string, type: string = 'success', duration: number = 3000, keepOpen: boolean = false, position: string = 'bottom',closeText: string = 'Got it'): any{

      let toastClass = '';
      if(type === 'success'){
        toastClass = 'toast-success online';
      }
      else if(type === 'warn'){
        toastClass = 'toast-warn offline';
      }
      else if(type === 'error'){
        toastClass = 'toast-fail'
      }

      let toastOptions:any = {
        message: message,
        cssClass: toastClass,
        position: position
      }

      if(keepOpen){
        toastOptions.showCloseButton = true;
        toastOptions.closeButtonText = closeText;
        toastOptions.dismissOnPageChange = false;
      }else{
        toastOptions.duration = duration;
      }

      let toast = this.toastCtrl.create(toastOptions);

      toast.present();
      console.log("toasst presented")

      return toast;
  }

  presentLoader(){
  	this.loader =  this.loadingCtrl.create({
	    content: 'Please wait...'
	});
	this.loader.present();
  }

  dismissLoader(){
  	if(this.loader){
  		this.loader.dismiss();
  	}
  }

  storeFcmToken(){
  	console.log("inside store storeFcmToken function");
  	if(this.user_fcm_token && this.user_email && this.user_name && this.user_profile_pic){
      this.unsubscribeApiCalls()
  		let url = "https://us-central1-tuckshop-9efa0.cloudfunctions.net/storeToken" // live 
      // let url = "http://localhost:5000/tuckshop-9efa0/us-central1/storeToken" // for testing
  		let body = {
  			name : this.user_name,
  			email : this.user_email,
  			fcm_token : this.user_fcm_token,
  			avatar : this.user_profile_pic
  		}
  		let headers = new Headers({'Content-Type': 'application/json'});
  		console.log("storeFcmToken request ==>", url, body, headers);
  		this.storeFcmTokenCall = this.request(url,'post',body,headers,true,'observable').subscribe((res)=>{
  			console.log("response from store fcm token api ==>", res);
  		},
      (error)=>{
  			console.log("error from storeFcmToken api ==>", error);
  		});
  	}
  }

  unsubscribeTopic(token){
    this.unsubscribeApiCalls();
    console.log("inside unsubscribeTopic function");
    let url = "https://us-central1-tuckshop-9efa0.cloudfunctions.net/unsubscribeTopic"
    // let url = "http://localhost:5000/tuckshop-9efa0/us-central1/unsubscribeTopic" // for testing
    let body = {
      fcm_token : token
    }
    let headers = new Headers({'Content-Type': 'application/json'});
    console.log("unsubscribeTopic request ==>", url, body, headers);
    this.unsubscribeTopicCall = this.request(url,'post', body, headers, true, 'observable')
      .subscribe((res)=>{
       console.log("response from unsubscribeTopic api ==>", res);
      },
      (error)=>{
        console.log("Error from unsubscribeTopic api ==>",error);
      });
  }

  unsubscribeApiCalls(){
    console.log("inside unsubscribe api calls functions")
    if(this.unsubscribeTopicCall){
      this.unsubscribeTopicCall.unsubscribe();
    }
    if(this.storeFcmTokenCall){
      this.storeFcmTokenCall.unsubscribe();
    }
  }

}
