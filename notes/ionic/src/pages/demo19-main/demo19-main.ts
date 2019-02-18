import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo19MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo19-main',
  templateUrl: 'demo19-main.html',
})
export class Demo19MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo19MainPage');
    // 接收跳转时携带的参数
    //var myId = this.navParams.get('id')
    //console.log(myId);
    console.log(this.navParams.data)
    
  }

}
