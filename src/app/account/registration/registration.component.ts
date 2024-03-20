
import { Component } from '@angular/core';
import { AccountserviceService } from '../accountservice.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private loginservice: AccountserviceService) { }

  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  // onSaveUser() {
  //   //debugger;
  //   const obj = this.userForm.value
  //   console.log(this.userForm.value)
  //   this.loginservice.createUser(obj)
  // }
  onSaveUser(): void {
    this.loginservice.createUser(this.userForm.value)
      .subscribe(
        (response: any) => {
          console.log('Data sent successfully:', response);
          alert(response.name)

          // Optionally, reset the form
          // this.resetForm();
        },
        (error: any) => {
          console.error('Error sending data:', error);
        }
      );
  }


}
