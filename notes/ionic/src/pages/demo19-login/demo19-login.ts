import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Demo19MainPage} from '../demo19-main/demo19-main'

/**
 * Generated class for the Demo19LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo19-login',
  templateUrl: 'demo19-login.html',
})
export class Demo19LoginPage {
  //保存在类的内部成员变量中，方便在模板中进行调用
  main = Demo19MainPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo19LoginPage');
  }

  // 能够跳转到Demo19MainPage
  jump(){
    // 跳转的方式
    // vue: this.$router.push('/main')
    // routerLink=
    // ng: this.myRouter.navigateByUrl('main')
    // this.navCtrl.push(Demo19MainPage)
    // this.navCtrl.push(Demo19MainPage,{id:10})
    this.navCtrl.push(Demo19MainPage,20)
  }

}
