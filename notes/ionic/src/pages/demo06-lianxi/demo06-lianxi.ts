import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo06LianxiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo06-lianxi',
  templateUrl: 'demo06-lianxi.html',
})
export class Demo06LianxiPage {
  myList = []

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo06LianxiPage');
    for(var i=0;i<30;i++){
      this.myList.push("商品"+i)
    }
  }

  handleDel(index){
    //从数组中删除一个指定位置的元素
    this.myList.splice(index,1)
  }

  loadMore(myInfinite){
    console.log('准备要加载更多数据了！')
    var length = this.myList.length
    for(var i=0;i<5;i++){
      this.myList.push("商品"+(length+i))
    }
    myInfinite.complete()

  }

}
