import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: AccountserviceService, private route: Router) { }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  onLogin(): void {
    console.log(this.loginForm)

    this.loginService.loginUser(this.loginForm.value).subscribe((response: any) => {
      console.log(response)
      localStorage.setItem('token', response.token);
      this.route.navigate(['/articles'])
      this.loginForm.reset()

    },
      (error: any) => {
        console.log('Error in login:', error.error)
      })
  }
}
