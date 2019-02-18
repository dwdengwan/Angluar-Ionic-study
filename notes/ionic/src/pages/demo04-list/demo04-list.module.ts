import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo04ListPage } from './demo04-list';

@NgModule({
  declarations: [
    Demo04ListPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo04ListPage),
  ],
})
export class Demo04ListPageModule {}
