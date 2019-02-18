import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Demo18IndexPage} from '../demo18-index/demo18-index'
import {Demo18PersonPage} from '../demo18-person/demo18-person'
import {Demo18SettingsPage} from '../demo18-settings/demo18-settings'

/**
 * Generated class for the Demo18LianxiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo18-lianxi',
  templateUrl: 'demo18-lianxi.html',
})
export class Demo18LianxiPage {
  tabIndex = Demo18IndexPage
  tabPerson = Demo18PersonPage
  tabSettings = Demo18SettingsPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo18LianxiPage');
  }

}
