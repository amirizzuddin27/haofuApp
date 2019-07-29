import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-sup',
  templateUrl: './sup.page.html',
  styleUrls: ['./sup.page.scss'],
})
export class SupPage implements OnInit {

  currentDate;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  }

}
