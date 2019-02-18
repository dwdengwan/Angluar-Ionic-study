import { Component } from '@angular/core';
import {AlertController,ToastController,LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-demo09-loading',
  templateUrl: 'demo09-loading.html',
})
export class Demo09LoadingPage {

  constructor(
    private alertCtrl:AlertController,
    private toastCtrl:ToastController,
    private loadingCtrl:LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo09LoadingPage');
  }

  // 显示一个正在加载的窗口
  showLoading(){
    //创建
    var myLoading = 
     this.loadingCtrl.create({
      //  duration:1000,
       content:'正在刷新...'
     });
    //显示
    myLoading.present()

    setTimeout(()=>{
      myLoading.setContent("即将刷新完成")
    },1500)

    setTimeout(()=>{
      myLoading.dismiss()
    },3000)

  }

  // 显示一个通知
  showToast(){
    // 创建
    var myToast = this.toastCtrl.create({
      message:'登录失败',
      position:'top',//top/middle/bottom
      duration:1500,
      showCloseButton:true,
      closeButtonText:'关闭'
    })
    // 显示
    myToast.present()
  }


  // 显示警告、确认、输入提示窗口
  showWindow(){
      var myWindow = this.alertCtrl.create({
        title:'这是标题',
        message:'这是消息',
        inputs:[
          {
            placeholder:'请输入金额'
          }          
        ],
        buttons:[
          {
            text:'关闭',
            handler:(result)=>{
              console.log('用户选择了关闭')
            }
          },
          {
            text:'确认',
            handler:(result)=>{
              console.log('用户选择了确认',result[0])
            }
          }
        ]
      })

      myWindow.present()
  }

}
