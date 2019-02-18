import { Component } from '@angular/core';
import {ToastController,AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo10LianxiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo10-lianxi',
  templateUrl: 'demo10-lianxi.html',
})
export class Demo10LianxiPage {

  constructor(
    private toastCtrl:ToastController,
    private alertCtrl:AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo10LianxiPage');
  }

  /**
   * 显示一个输入提示窗口
      (一个输入框，确认、关闭按钮，点击确认，显示一个toast)
   */
  showPrompt(){
    var myPrompt = this.alertCtrl.create({
      title:'手机号验证',
      inputs:[
        {placeholder:'请输入手机号进行验证'}
      ],
      buttons:[
        {
          text:'确认',
          handler:(result)=>{
            //显示一个通知
            var msg = "验证码已经成功的发送到"+result[0];
            this.showToast(msg)
          }
        },
        {
          text:'关闭'
        }
      ]
    })
    myPrompt.present()
  }

  showToast(msg){    
    this.toastCtrl.create({
      message:msg,
      duration:1500
    }).present()
  }

}
