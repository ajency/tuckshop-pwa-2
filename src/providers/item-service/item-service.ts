import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs'

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

////////////////////////////////////////////////////////////////////////////////////////////////////
//  API Calls
////////////////////////////////////////////////////////////////////////////////////////////////////
//const API			= 'http://localhost:5000/tuckshop-3/us-central1/api';                           ////
const API			= 'https://us-central1-tuckshop-3.cloudfunctions.net/api'                         ////
////////////////////////////////////////////////////////////////////////////////////////////////////



@Injectable()
export class ItemServiceProvider {

  private fetchItemsUrl	= API + '/get-items';   

  private httpOptions = new RequestOptions({
    headers : new Headers({'Content-Type' : 'application/json'})
  });

  constructor(public http: Http) {
    console.log('Hello ItemServiceProvider Provider');
  }


  fetchItems(){
    let body = {}

    return this.http.post(this.fetchItemsUrl, body, this.httpOptions)
    .toPromise()
    .then(response => {
      console.log("fetch items response: ", JSON.stringify(response.json()) )
      return response.json();
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
