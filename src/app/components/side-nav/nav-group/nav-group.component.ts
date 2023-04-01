import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss'],
})
export class NavGroupComponent {
  @Input() groupName: string = '';
  @Input() buttonsContent: string[] = [];
  @Input() buttonsIconsName: string[] = [];
  @Input() impairedMode: boolean = false;
  @Input() fontSize: number = 14;
}
