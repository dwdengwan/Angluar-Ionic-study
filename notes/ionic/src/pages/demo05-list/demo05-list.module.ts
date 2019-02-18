import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo05ListPage } from './demo05-list';

@NgModule({
  declarations: [
    Demo05ListPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo05ListPage),
  ],
})
export class Demo05ListPageModule {}
