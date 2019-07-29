import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.page.html',
  styleUrls: ['./fourth.page.scss'],
})
export class FourthPage implements OnInit {

  currentDate;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  }

}
