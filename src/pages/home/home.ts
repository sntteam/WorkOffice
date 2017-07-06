import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BindUserFunction} from '../bind-user-function/bind-user-function';
import {BindUserPage} from '../bind-user-page/bind-user-page';
import {UserOfficeDetailPage} from '../user-office-detail-page/user-office-detail-page';
import {UserOfficePage} from '../user-office-page/user-office-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  trunToOfficeList(){
    console.log("trunToOfficeList");
    this.navCtrl.push(UserOfficePage,{item1:'ios-newPage'});
  }

  trunToUserBind(){
    console.log("trunToOfficeList");
    this.navCtrl.push(BindUserPage,{item1:'ios-newPage'});
  }
  trunToBindFunction(){
    console.log("trunToOfficeList");
    this.navCtrl.push(BindUserFunction,{item1:'ios-newPage'});
  }
  trunToDetail(){
    console.log("trunToOfficeList");
    this.navCtrl.push(UserOfficeDetailPage,{item1:'ios-newPage'});
  }



}
