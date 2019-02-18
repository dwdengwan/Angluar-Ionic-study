import { Component } from '@angular/core';
import { ViewController,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo12PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo12-pay',
  templateUrl: 'demo12-pay.html',
})
export class Demo12PayPage {

  constructor(
    private viewCtrl:ViewController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo12PayPage');
  }

  close(){
    //关闭当前的模态窗口
    this.viewCtrl.dismiss(123)
  }

}
