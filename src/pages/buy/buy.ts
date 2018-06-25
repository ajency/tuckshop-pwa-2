import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, IonicPage } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private viewCtrl: ViewController, 
              private toastCtrl: ToastController,
              public appservice : AppServiceProvider) {
  	this.item = this.navParams.get('item');
    this.quantity = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyPage');
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

  onBuy(ev) {
      console.log("onBuy", ev, this.quantity);
      this.viewCtrl.dismiss();

      var user =  this.appservice.user_email;
      var avatar = this.appservice.user_profile_pic;
      console.log(user);
       // Create execution request.
      var request = {
        'function': 'log',
        'parameters': [ev,user,this.quantity,avatar]
      };

      // Make the request.
      let url = `https://content-script.googleapis.com/v1/scripts/${this.appservice.script_id}:run`
      let toast = this.waitingToast();

      this.appservice.request(url,'post',request,{},false,'promise').then((res)=>{
          console.log("response from log api ==>", res);
          toast.dismiss();
          this.confirmationToast();
      })
      .catch((error)=>{
          console.log("error from search api", error);
          toast.dismiss();
          this.requestFailedToast();
      })

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
