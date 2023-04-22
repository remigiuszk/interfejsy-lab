import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  public signInForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  public formSubmited: boolean = false;

  constructor(public authService: AuthService, private router: Router) {}

  public get login() {
    return this.signInForm.controls.login;
  }

  public get password() {
    return this.signInForm.controls.password;
  }

  public onSubmit(): void {
    const loginFromStorage = sessionStorage.getItem('login');
    const passwordFromStorage = sessionStorage.getItem('password');

    this.authService.isUserAuthorized =
      this.login.value == loginFromStorage &&
      this.password.value == passwordFromStorage;

    this.formSubmited = true;
    this.router.navigate(['/main']);
  }
}
