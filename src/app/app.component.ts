import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lab1ui';
  public fontSize: number = 14;
  public impairedMode = false;

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
