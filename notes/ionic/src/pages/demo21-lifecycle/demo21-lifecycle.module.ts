import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo21LifecyclePage } from './demo21-lifecycle';

@NgModule({
  declarations: [
    Demo21LifecyclePage,
  ],
  imports: [
    IonicPageModule.forChild(Demo21LifecyclePage),
  ],
})
export class Demo21LifecyclePageModule {}
