import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
/**
 * Generated class for the Demo14LianxiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo14-lianxi',
  templateUrl: 'demo14-lianxi.html',
})
export class Demo14LianxiPage {
  myList = [] //用来保存轮播图数组

  constructor(
    private myHttp:HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo14LianxiPage');
    //发起网络请求
    var url = "http://localhost:8080/index";

    this.myHttp
     .get(url)
     .subscribe((result:any)=>{
       console.log(result)
       //将result.carouselItems数组保存起来，然后到轮播图进行显示
       this.myList = result.carouselItems
     })
  }

}
