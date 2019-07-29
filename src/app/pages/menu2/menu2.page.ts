import { Component, OnInit } from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.page.html',
  styleUrls: ['./menu2.page.scss'],
})
export class Menu2Page implements OnInit {

  myphoto: any;



  constructor(private camera: Camera, public navCtrl: NavController) {}

/*
  good(){
  this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
    toast => {
      console.log(toast);
    }
  );
  }*/

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      this.starterTimer();
     // Handle error
    });
  }

  starterTimer() {
// tslint:disable-next-line: only-arrow-functions
    setTimeout(function() {
      alert('Attention!!');
    }, 3000);
  }

  ngOnInit() {
  }

}
