import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MianPage } from './mian-page';

@NgModule({
  declarations: [
    MianPage,
  ],
  imports: [
    IonicPageModule.forChild(MianPage),
  ],
  exports: [
    MianPage
  ]
})
export class MianPageModule {}
