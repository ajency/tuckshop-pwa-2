import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
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

	// client_id = "676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com"
	client_id = "424476852000-562ov6kfvkoljht8gnocsaiiv0s1o2k3.apps.googleusercontent.com"

	// script_id = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";
	script_id = "MjTVF50mrNfjX0_kvuCTT1aAvZzphd5k5";
	public auth2: any;
	user_profile_pic : any;
	bearer_token : any;
	user_email : any;
	user_name : any;
	handleError : any;

  constructor(public http: Http) {
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

}
