import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, IonicPage } from 'ionic-angular';

declare const gapi : any;
/**
 * Generated class for the BuyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment : 'buy/:itemCode'})

@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {

	private item = [];
  public auth2 : any;
  private itemCode;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private toastCtrl: ToastController) {
  	this.item = this.navParams.get('item');
    this.itemCode = this.navParams.get('itemCode');
   
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad BuyPage');
    this.handleClientLoad();
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }





handleClientLoad() {
  console.log("handleClientLoad function");
      let that = this;
        gapi.load('client:auth2', function () {
        gapi.client.init({
           client_id: '676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'https://www.googleapis.com/auth/spreadsheets'
        }).then(function () {

          // Listen for sign-in state changes.

                    gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);

          console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
          // this.test(true);
          that.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());



          // authorizeButton.onclick = handleAuthClick;
          // signoutButton.onclick = handleSignoutClick;
        });
        });

      }

      updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
          //Do nothing
              // this.callScriptFunction("");

        } else {

       // *  Sign in the user upon button click.

                  gapi.auth2.getAuthInstance().signIn();
                  // this.navCtrl.push('SearchPage');
        }
      }





onBuy(ev) {

      console.log("onBuy", ev);
      var scriptId = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";

      // let that = this;


      var user =  gapi.auth2.getAuthInstance().currentUser.get().w3.U3;
      console.log(user);
       // Create execution request.
var request = {
    'function': 'log',
    'parameters': [ev,user]
    // 'devMode': true   // Optional.
};
// Make the request.
var op = gapi.client.request({
    'root': 'https://script.googleapis.com',
    'path': 'v1/scripts/' + scriptId + ':run',
    'method': 'POST',
    'body': request
});

//logging the results
  op.execute(function(resp ) {
  // that.processResponse(resp);


});

this.viewCtrl.dismiss();
this.confirmationToast();

}




confirmationToast() {
  let toast = this.toastCtrl.create({
    message: 'Order placed successfully',
    duration: 3000,
    position: 'bottom'
  });


  toast.present();
}

}
