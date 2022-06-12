import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FavouritesService } from 'src/app/favourites.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  constructor(private favourites: FavouritesService) {}

  @Output() emitEnableButton = new EventEmitter();

  @Input() index: number = 0;
  @Input() color: string = '#fffff';
  @Input() showfav: boolean = true;

  @Input() profileInfo: any;

  ngOnInit(): void {
    console.log(this.profileInfo);
  }

  showProfile(): boolean {
    if (this.index >= 0 && this.index < 3) {
      return true;
    }
    return false;
  }
  favourite(): void {
    this.favourites.pushFav(this.profileInfo);
    this.emitEnableButton.emit(true);
  }
  remove(): void {
    this.favourites.remove(this.profileInfo.message);
    this.emitEnableButton.emit(true);
  }
}
