import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo18IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo18-index',
  templateUrl: 'demo18-index.html',
})
export class Demo18IndexPage {
  myList = [] 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo18IndexPage');
    for(var i=0;i<30;i++){
      this.myList.push("商品"+i)
    }
  }

}
