import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Demo16FabPage} from '../demo16-fab/demo16-fab'

@IonicPage()
@Component({
  selector: 'page-demo17-tabs',
  templateUrl: 'demo17-tabs.html',
})
export class Demo17TabsPage {
   pageIndex = Demo16FabPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo17TabsPage');
  }

}
