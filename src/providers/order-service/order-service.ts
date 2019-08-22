import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { EmailValidator } from '@angular/forms';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';
import { resolveDep } from '@angular/core/src/view/provider';



////////////////////////////////////////////////////////////////////////////////////////////////////
//  API Calls
////////////////////////////////////////////////////////////////////////////////////////////////////
//const API			= 'http://localhost:5000/tuckshop-3/us-central1/api';                           ////
const API			= 'https://us-central1-tuckshop-3.cloudfunctions.net/api'                         ////
////////////////////////////////////////////////////////////////////////////////////////////////////


@Injectable()
export class OrderServiceProvider {

  private placeOrderUrl	= API + '/place-order';                                                     

  private httpOptions = new RequestOptions({
    headers : new Headers({'Content-Type' : 'application/json'})
  });
  
  constructor(public http: Http) {
    console.log('Hello OrderServiceProvider Provider');
  }

  placeOrder(user_email, item_code, quantity){
    let body = {
      user_email,
      item_code,
      quantity,
    }

    return this.http.post(this.placeOrderUrl, body, this.httpOptions)
    .toPromise()
    .then(resp => {
      
      let response=resp.json()
      console.log("place order response: ", JSON.stringify(response) )
      console.log("message code: ",response["message_code"])
      if(response["message_code"] ==="ERROR"){
        console.log("throwing error")
        // throw new Error(response["message"]);
        return Promise.reject(new Error(response["message"]));
      }
      
      return resp.json();
    }).catch(this.handleError);

  }


  handleError = (error: any): Promise<any> => {
    console.warn('error in request fetch',error)
    console.log(error.status);

    let prerror = this.parseRejectedError(error);
    return Promise.reject(prerror);
  }
  parseRejectedError(error: any): any{
    try{
      return JSON.parse(error._body);
    }
    catch(e){
      return error;
    }
  }

}
