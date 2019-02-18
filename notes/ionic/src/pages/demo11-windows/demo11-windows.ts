import { Component } from '@angular/core';
import {ModalController,ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {Demo12PayPage} from '../demo12-pay/demo12-pay'

/**
 * Generated class for the Demo11WindowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo11-windows',
  templateUrl: 'demo11-windows.html',
})
export class Demo11WindowsPage {

  constructor(
    private modalCtrl:ModalController,
    private asCtrl:ActionSheetController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo11WindowsPage');
  }

  // 显示一个自定义的模态窗口
  showModal(){
    var myModal = this.modalCtrl.create(Demo12PayPage);

    // 如何在myModal被关闭时接收传递来的数据?
    myModal.onDidDismiss((result)=>{
      console.log(result)
    })

    myModal.present()
  }


  showActionSheet(){

    this.asCtrl.create({
      title:'分享到',
      buttons:[
        {
          text:'删除',
          role:'destructive'
        },
        {
          text:'微博',
          handler:()=>{
            console.log('分享到微博成功!')
          }
        },
        {
          text:'qq'
        },
        {
          text:'微信'
        },
        {
          text:'取消',
          role:'cancel'
        }
      ]
    }).present()
  }

}
