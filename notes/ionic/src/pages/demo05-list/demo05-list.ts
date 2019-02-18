import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo05ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo05-list',
  templateUrl: 'demo05-list.html',
})
export class Demo05ListPage {
  myList = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo05ListPage');
    for(var i=0;i<50;i++){
      this.myList.push("商品"+i)
    }
  }

  doRefresh(myRefresher){
    console.log('用户松手了，触发了刷新的操作')
    //举例: 请求最新的数据加载过来
    // 模拟一个异步操作
    setTimeout(()=>{
      for(var i=0;i<5;i++){
        var num = Math.floor(Math.random()*100)
        this.myList.unshift(num)
      }
      //异步操作结束之后，通知refresher可以结束刷新动作
      myRefresher.complete()
    },2000)

    
  }

  // 加载更多
  loadMore(myInfinite){
    console.log("用户触发了加载更多的操作")
    // 执行和加载更多相关的逻辑处理
    // 模拟一个异步的延迟操作
    setTimeout(()=>{
      for(var i=0;i<5;i++){
        var num = Math.floor(Math.random()*100)
        this.myList.push(num)
      }
      //通知ionInfiniteScroll结束加载更多的动画效果
      myInfinite.complete()
    },3000)
  }

}
