import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Demo01Page} from '../pages/demo01/demo01'
import {Demo02Page} from '../pages/demo02/demo02'
import {Demo03BtnPage} from '../pages/demo03-btn/demo03-btn'
import {Demo04ListPage} from '../pages/demo04-list/demo04-list'
import {Demo05ListPage} from '../pages/demo05-list/demo05-list'
import {Demo06LianxiPage} from '../pages/demo06-lianxi/demo06-lianxi'
import {Demo07GridPage} from '../pages/demo07-grid/demo07-grid'
import {Demo08LianxiPage} from '../pages/demo08-lianxi/demo08-lianxi'
import {Demo09LoadingPage} from '../pages/demo09-loading/demo09-loading'
import {Demo10LianxiPage} from '../pages/demo10-lianxi/demo10-lianxi'
import { Demo11WindowsPage } from '../pages/demo11-windows/demo11-windows';
import {Demo12PayPage} from '../pages/demo12-pay/demo12-pay'
import {Demo13SlidesPage} from '../pages/demo13-slides/demo13-slides'
import {Demo14LianxiPage} from '../pages/demo14-lianxi/demo14-lianxi'
import {Demo15FormsPage} from '../pages/demo15-forms/demo15-forms'
import {Demo16FabPage} from '../pages/demo16-fab/demo16-fab'
import {Demo17TabsPage} from '../pages/demo17-tabs/demo17-tabs'
import {Demo18LianxiPage} from '../pages/demo18-lianxi/demo18-lianxi'
import {Demo18IndexPage} from '../pages/demo18-index/demo18-index'
import {Demo18PersonPage} from '../pages/demo18-person/demo18-person'
import {Demo18SettingsPage} from '../pages/demo18-settings/demo18-settings'
import {Demo19LoginPage} from '../pages/demo19-login/demo19-login'
import {Demo19MainPage} from '../pages/demo19-main/demo19-main'
import {Demo20ListPage} from '../pages/demo20-list/demo20-list'
import {Demo20DetailPage} from '../pages/demo20-detail/demo20-detail'
import {Demo21LifecyclePage} from '../pages/demo21-lifecycle/demo21-lifecycle'

@NgModule({
  declarations: [
    Demo21LifecyclePage,
    Demo20ListPage,
    Demo20DetailPage,
    Demo19LoginPage,
    Demo19MainPage,
    Demo18LianxiPage,
    Demo18IndexPage,
    Demo18PersonPage,
    Demo18SettingsPage,
    Demo17TabsPage,
    Demo16FabPage,
    Demo15FormsPage,
    Demo14LianxiPage,
    Demo13SlidesPage,
    Demo12PayPage,
    Demo11WindowsPage,
    Demo10LianxiPage,
    Demo09LoadingPage,
    Demo08LianxiPage,
    Demo07GridPage,
    Demo06LianxiPage,
    Demo05ListPage,
    Demo04ListPage,
    Demo03BtnPage,
    Demo02Page,
    Demo01Page,
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Demo21LifecyclePage,
    Demo20ListPage,
    Demo20DetailPage,
    Demo19LoginPage,
    Demo19MainPage,
    Demo18LianxiPage,
    Demo18IndexPage,
    Demo18PersonPage,
    Demo18SettingsPage,
    Demo17TabsPage,
    Demo16FabPage,
    Demo15FormsPage,
    Demo14LianxiPage,
    Demo13SlidesPage,
    Demo12PayPage,
    Demo11WindowsPage,
    Demo10LianxiPage,
    Demo09LoadingPage,
    Demo08LianxiPage,
    Demo07GridPage,
    Demo06LianxiPage,
    Demo05ListPage,
    Demo04ListPage,
    Demo03BtnPage,
    Demo02Page,
    Demo01Page,
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
