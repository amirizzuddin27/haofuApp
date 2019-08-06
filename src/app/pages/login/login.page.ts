import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user;
  username;
  userpassword;
  loginForm: FormGroup;

  constructor(private http: LoginService, private router: Router, public alertController: AlertController
   ) { }

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   username: new FormControl('', [Validators.required]),
    //   userpassword: new FormControl('', [Validators.required]),
    // });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Access denied',
      message: 'Wrong username or password.',
      buttons: ['OK']
    });

    await alert.present();
  }



login(): void {
  console.log('masuk');
  console.log(this.username);
  console.log(this.userpassword);
    // start loading
    // if (this.loginForm.status == 'VALID') {


    //   // call getUser method in HttpService
    //   console.log(this.loginForm.value.username);
  this.http.getUser(this.username,this.userpassword).subscribe(
        response => {
          this.user = response;
          console.log(this.user)
          
		  // // tslint:disable-next-line: indent
		  // // set user response in local storage for futher usage
      //     localStorage.setItem('user', JSON.stringify(this.user));

          // redirect page based on User_Role
          if (this.user.employee.employeejobtitle == 'Technician') {
            this.router.navigateByUrl('/menu/first');
          } else {
            this.router.navigateByUrl('/menu/sup');
          }

        }, error => {
		// tslint:disable-next-line: indent
    // if error it goes here
    this.presentAlert();
        }
      );
    }

  }




