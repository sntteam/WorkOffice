import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserOfficeDetailPage } from './user-office-detail-page';

@NgModule({
  declarations: [
    UserOfficeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UserOfficeDetailPage),
  ],
  exports: [
    UserOfficeDetailPage
  ]
})
export class UserOfficeDetailPageModule {}
