import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AppServiceProvider {

	// client_id = "676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com"
	client_id = "424476852000-562ov6kfvkoljht8gnocsaiiv0s1o2k3.apps.googleusercontent.com"

	// script_id = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";
	script_id = "MjTVF50mrNfjX0_kvuCTT1aAvZzphd5k5";
  constructor(public http: Http) {
    console.log('Hello AppServiceProvider Provider');
  }

}
