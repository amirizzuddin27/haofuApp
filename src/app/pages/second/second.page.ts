import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  currentDate;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  }

}
