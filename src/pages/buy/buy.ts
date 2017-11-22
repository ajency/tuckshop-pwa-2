import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, IonicPage } from 'ionic-angular';
declare const gapi : any;
/**
 * Generated class for the BuyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {

	private item = [];
  public auth2 : any;
  private quantity : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private toastCtrl: ToastController) {
  	this.item = this.navParams.get('item');
    this.quantity = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyPage');
    this.handleClientLoad();
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }





handleClientLoad() {

      // let that = this;
        gapi.load('client:auth2', function () {
        gapi.client.init({
           client_id: '676621258132-v9fqtd0tl50in48cmb92jht0k3be2024.apps.googleusercontent.com',
          // client_id: '676621258132-6q9s2j1hc8343jj3nn75k0is4s1nb893.apps.googleusercontent.com',
           // client_id: '164623832984-ivug8glc6tgtu0sgjbm51oigp27u0033.apps.googleusercontent.com',

        cookiepolicy: 'single_host_origin',
        scope: 'https://www.googleapis.com/auth/spreadsheets'
        // scope: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']
        
        }).then(function () {

          // Listen for sign-in state changes.

                    // gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);

          console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
          // var user =  gapi.auth2.getAuthInstance().currentUser.get().BasicProfile.getEmail();
      // console.log(user);


          // this.test(true);
          // that.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          // authorizeButton.onclick = handleAuthClick;
          // signoutButton.onclick = handleSignoutClick;
        });
        });

      }




onBuy(ev) {
      console.log("onBuy", ev, this.quantity);
      var scriptId = "MD2K4IAXQvDUx9j9i90DKEK-i8ofEvg_L";
      // var scriptId = "MspHiDZOV00Yjjl8SzYTDSSh_GrEu24Vl";

       let that = this;
        that.viewCtrl.dismiss();

      var user =  gapi.auth2.getAuthInstance().currentUser.get().w3.U3;
      console.log(user);
       // Create execution request.
var request = {
    'function': 'log',
    'parameters': [ev,user,this.quantity]
    // 'devMode': true   // Optional.
};
// Make the request.
var op = gapi.client.request({
    'root': 'https://script.googleapis.com',
    'path': 'v1/scripts/' + scriptId + ':run',
    'method': 'POST',
    'body': request
});


let toast = that.waitingToast();
console.log(op);
//logging the results
op.then(function(response) {
toast.dismiss();
console.log('request succeessful'); 
console.log(response);
that.confirmationToast();
 // that.processResponse(resp);
},function(reason){

toast.dismiss();
console.log('request failed', reason);
that.requestFailedToast();

});



}




confirmationToast() {

  let toast = this.toastCtrl.create({
    message: 'Order placed successfully!!',
    duration: 3000,
    position: 'bottom'
  });


  toast.present();
}

requestFailedToast() {
  let toast = this.toastCtrl.create({
    message: 'Order failed!   Please check your internet connection',
    position: 'bottom',
    showCloseButton : true
  });


  toast.present();
}

 waitingToast() {
  let toast = this.toastCtrl.create({
    message: 'Please wait...',
    duration: 15000,
    position: 'bottom',
  });


  toast.present();
  return toast;

}

}
