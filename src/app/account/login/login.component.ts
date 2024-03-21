import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: AccountserviceService) { }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  onLogin(): void {
    console.log(this.loginForm)

    this.loginService.loginUser(this.loginForm.value).subscribe((response: any) => {
      console.log(response)
      this.loginForm.reset()
    },
      (error: any) => {
        console.log('Error in login:', error.error)
      })
  }
}
