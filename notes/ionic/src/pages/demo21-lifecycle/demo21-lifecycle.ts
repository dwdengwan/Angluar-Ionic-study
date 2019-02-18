import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Demo20ListPage} from '../demo20-list/demo20-list'

/**
 * Generated class for the Demo21LifecyclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo21-lifecycle',
  templateUrl: 'demo21-lifecycle.html',
})
export class Demo21LifecyclePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo21LifecyclePage');
    // 3s之后返回上一页
    setTimeout(()=>{
      console.log(this.navCtrl.canGoBack())
      //this.navCtrl.pop()
      //跳转到demo20-list
      this.navCtrl.push(Demo20ListPage)

    },3000)
  }

  ionViewCanEnter(){
    console.log("ionViewCanEnter method is called")
    return true
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave method is called')
  }

}
