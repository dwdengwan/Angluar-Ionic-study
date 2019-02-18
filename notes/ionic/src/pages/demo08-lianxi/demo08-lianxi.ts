import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo08LianxiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo08-lianxi',
  templateUrl: 'demo08-lianxi.html',
})
export class Demo08LianxiPage {
  myList = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo08LianxiPage');
    for(var i=0;i<14;i++){
      this.myList.push("商品"+i)
    }
  }

}
