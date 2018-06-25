import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialsPage');
  }

  ngOnInit(){
  	console.log("Inside ngOnInit SpecialsPage");
  	
  }

}
