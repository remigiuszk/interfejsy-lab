import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements OnInit {
  @Input() content: string = '';
  @Input() iconName: string = '';
  @Input() impairedMode: boolean = false;
  @Input() fontSize: number = 14;
  @Input() route: string = '/';
  constructor() {}

  ngOnInit() {}
}
