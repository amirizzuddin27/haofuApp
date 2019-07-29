import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

/*
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      userpassword: new FormControl('', [Validators.required]),
    });
  }


login():void {
    // start loading
    if(this.loginForm.status == 'VALID'){
      this.spinner.show();

      // call getUser method in HttpService
      console.log(this.loginForm.value.username)
      this.http.getUser(this.loginForm.value.username, this.loginForm.value.userpassword).subscribe(
        response => {
          this.user = response
          console.log(this.user)
		  
		  //set user response in local storage for futher usage
          localStorage.setItem('user', JSON.stringify(this.user))

          // redirect page based on User_Role
          if (response.employee.employeejobtitle == 'Technician') {
            this.router.navigateByUrl('/smart-jobcard')
          }else if(response.employee.employeejobtitle == 'Engineer'){
            this.router.navigateByUrl('/workshop-worksheet')
          }
          else{
            this.router.navigateByUrl('/dashboard')
          }

        }, error => {
		//if error it goes here
        }
      )
    }

  }


*/
}
