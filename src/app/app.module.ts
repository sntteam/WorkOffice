import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MianPage } from '../pages/mian-page/mian-page';
import {BindUserFunction} from '../pages/bind-user-function/bind-user-function';
import {BindUserPage} from '../pages/bind-user-page/bind-user-page';
import {UserOfficeDetailPage} from '../pages/user-office-detail-page/user-office-detail-page';
import {UserOfficePage} from '../pages/user-office-page/user-office-page';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MianPage,
    BindUserFunction,
    BindUserPage,
    UserOfficeDetailPage,
    UserOfficePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MianPage,
    BindUserFunction,
    BindUserPage,
    UserOfficeDetailPage,
    UserOfficePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
