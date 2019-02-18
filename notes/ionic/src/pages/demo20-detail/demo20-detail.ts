import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo20DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo20-detail',
  templateUrl: 'demo20-detail.html',
})
export class Demo20DetailPage {
  id = 0
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo20DetailPage');
    //接收跳转时传来的参数保存
    this.id = this.navParams.get('myId')
    // 显示在h2
  }

}
