import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lab1ui';
  public fontSize: number = 14;
  public impairedMode = false;

  constructor(public authService: AuthService) {
    sessionStorage.setItem('login', 'admin');
    sessionStorage.setItem('password', 'adminowski');
  }

  public increaseFontSize() {
    this.fontSize++;
  }

  public descreaseFontSize() {
    this.fontSize--;
  }

  public changeMode() {
    this.impairedMode = !this.impairedMode;
  }
}
