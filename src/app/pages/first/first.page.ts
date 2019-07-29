import { Component, OnInit } from '@angular/core';
import {MenuController, NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {


  public templates = [];
  currentDate;
  formattedDate;

  constructor(private _templatesService: LoginService, private menuCtrl: MenuController, public navCtrl: NavController, public toastController: ToastController) {

// tslint:disable-next-line: only-arrow-functions
   // setInterval(function() { console.log(true); }, 3000);

  }

  ngOnInit() {

    this._templatesService.getTemplates()
    .subscribe(
      response => { console.log(response),
        this.templates = response['Result']
      }
    );
    

    this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  }



  more() {
    alert('Ok');
  }
  getFormattedDate() {
    const dateObj = new Date();
    const year = dateObj.getFullYear().toString();
    const month = dateObj.getMonth().toString();
    const date = dateObj.getDate().toString();

    const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'AUG', 'Sept', 'Oct', 'Nov', 'Dec'];

    this.formattedDate = year + '-' + monthArray[month] + '-' + date;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'You clicked on the button.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Hello',
      message: 'Maintenance',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'OCR',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }




}
