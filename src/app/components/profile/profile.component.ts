import { Component, Input, OnInit } from '@angular/core';
import { Profile } from './profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  constructor() {}

  @Input() index: number = 0;
  @Input() color: string = '#fffff';

  @Input() profileInfo: any;

  ngOnInit(): void {}

  showProfile(): boolean {
    if (this.index >= 0 && this.index < 3) {
      return true;
    }
    return false;
  }
}
