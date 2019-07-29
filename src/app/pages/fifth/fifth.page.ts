import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.page.html',
  styleUrls: ['./fifth.page.scss'],
})
export class FifthPage implements OnInit {
  currentDate;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  }

}
