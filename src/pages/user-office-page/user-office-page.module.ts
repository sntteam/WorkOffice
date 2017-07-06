import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserOfficePage } from './user-office-page';

@NgModule({
  declarations: [
    UserOfficePage,
  ],
  imports: [
    IonicPageModule.forChild(UserOfficePage),
  ],
  exports: [
    UserOfficePage
  ]
})
export class UserOfficePageModule {}
