import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BindUserPage } from './bind-user-page';

@NgModule({
  declarations: [
    BindUserPage,
  ],
  imports: [
    IonicPageModule.forChild(BindUserPage),
  ],
  exports: [
    BindUserPage
  ]
})
export class BindUserPageModule {}
