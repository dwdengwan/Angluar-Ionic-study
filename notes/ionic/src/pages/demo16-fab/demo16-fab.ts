import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo16FabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo16-fab',
  templateUrl: 'demo16-fab.html',
})
export class Demo16FabPage {
  myList = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo16FabPage');
    for(var i=0;i<50;i++){
      this.myList.push("商品"+i)
    }
  }

}
