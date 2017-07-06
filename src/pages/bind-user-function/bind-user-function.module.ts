import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BindUserFunction } from './bind-user-function';

@NgModule({
  declarations: [
    BindUserFunction,
  ],
  imports: [
    IonicPageModule.forChild(BindUserFunction),
  ],
  exports: [
    BindUserFunction
  ]
})
export class BindUserFunctionModule {}
