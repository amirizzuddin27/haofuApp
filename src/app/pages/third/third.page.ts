import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

  currentDate;
  number=6258;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  }

}
