import { Component, OnInit } from '@angular/core';
import { FavouritesService } from 'src/app/favourites.service';
import { UsefulLink } from './useful-link';
import { UsefulLinksService } from './useful-link.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
})
export class MainPageComponent implements OnInit {
  constructor(
    public favourites: FavouritesService
  ) { }
  links: UsefulLink[] = new UsefulLinksService().links;
  socialLinks: UsefulLink[] = new UsefulLinksService().socialLinks;
  leftLinks: UsefulLink[] = [];
  rightLinks: UsefulLink[] = [];
  play: boolean = false;

  ngOnInit(): void {
    this.play = false;
    this.leftLinks = this.links.slice(0, 4);
    this.rightLinks = this.links.slice(4, 8);
  }

  showFavourites(): void {
    this.play = true;
  }

}
