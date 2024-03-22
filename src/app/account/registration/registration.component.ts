import { Component } from '@angular/core';
import { AccountserviceService } from '../accountservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private signupservice: AccountserviceService, private router: Router) { }

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSaveUser(): void {
    console.log(this.userForm);
    this.signupservice.createUser(this.userForm.value)
      .subscribe(
        (response: any) => {
          console.log('Data sent successfully:', response);
          alert(response.success);

          // Optionally, reset the form
          if (response.success) {
            this.userForm.reset();
            this.router.navigate(['/login'])
          }
        },
        (error: any) => {
          console.error('Error sending data:', error);
          alert(error.message)
        }
      );
  }
}
