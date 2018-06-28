import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';
/**
 * Generated class for the SpecialsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name : 'SpecialsPage',
  segment : 'specials'
})
@Component({
  selector: 'page-specials',
  templateUrl: 'specials.html',
})
export class SpecialsPage {

  specials : any;
  morning_special : Array<any> = [];
  evening_special : Array<any> = [];
  noSpecialOrders : boolean = false;
  specialsCallTimeInterval : any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public appservice : AppServiceProvider,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialsPage');
  }

  ngOnInit(){
  	console.log("Inside ngOnInit SpecialsPage");
    this.appservice.handleClientLoad().then((res)=>{
      this.appservice.presentLoader();
      this.callSpecialOrdersApi();
      this.specialsCallTimeInterval = setInterval(()=>{
        this.callSpecialOrdersApi();
      },60000);
      
    })
    .catch((error)=>{
      this.navCtrl.push('home');
    })
  	
  }

  callSpecialOrdersApi(){    
    console.log("Inside special order api call function");
    let url = `https://content-script.googleapis.com/v1/scripts/${this.appservice.script_id}:run`;

    let body = {
      function : "getSpecialsOrder",
      parameters : ""
    }

    this.appservice.request(url,'post',body,{},false,'promise').then((res)=>{
        console.log("response from search api ==>", res);
        if(res.response.result && res.response.result.length){
          this.specials = res.response.result;
          this.sortSpecials();
        }
        else{
          this.noSpecialOrders = true;
        }        
        this.appservice.dismissLoader();
    })
    .catch((error)=>{
        console.log("error from search api", error);
        this.appservice.dismissLoader();  
    })
  }

  sortSpecials(){
    let special_morning = this.specials[0].item;
    for(let i=0;i<this.specials.length; i++){
      if(this.specials[i].item == special_morning){
        this.morning_special.push(this.specials[i])
      }
      else{
        this.evening_special.push(this.specials[i]);
      }
    }
  }

  closeOrder(user, time, index){
    if(user.order_status == 'open'){
      console.log('Close oreder for ==>', user,time,index);
      let body = {
        function : 'close_order',
        parameters : [user.email, user.item, user.date_of_order]
      }

      let url = `https://content-script.googleapis.com/v1/scripts/${this.appservice.script_id}:run`;
      this.appservice.request(url,'post',body,{},false,'promise').then((res)=>{
          console.log("response from search api ==>", res);
          if(res.response.result === true){
            if(time == 'morning'){
              this.morning_special[index].order_status = 'closed'
            }
            else{
              this.evening_special[index].order_status = 'closed'
            }
          }
          else{
            let toast = this.appservice.presentToast("Something unexpected happened",'error',5000,false,'bottom',''); 
          }
          
      })
      .catch((error)=>{
          console.log("error from search api", error);
      })
    }    
  }

}
