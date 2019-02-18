import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
import {Demo20DetailPage} from '../demo20-detail/demo20-detail'

@IonicPage()
@Component({
  selector: 'page-demo20-list',
  templateUrl: 'demo20-list.html',
})
export class Demo20ListPage {
  myList = []
  detail = Demo20DetailPage

  constructor(
    private myHttp:HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo20ListPage');
    // 发请求拿数据 HttpClient
    var url = "http://localhost:8080/product/list";
    
    this.myHttp
    .get(url).subscribe((result:any)=>{
      console.log(result)//需要将result.data保存在类中，然后到模板中显示
      this.myList = result.data
    })
    // 保存并显示
    // 处理点击时的交互行为
  }

  jump(id){
    // 跳转到demo20-detail,同时将当前商品的lid发送
    this.navCtrl
    .push(Demo20DetailPage,{myId:id})
  }

}
