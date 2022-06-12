import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  private favouritesList: any[] = [];

  get favourites(): any[] {
    return this.favouritesList;
  }

  pushFav(favourite: any): void {
    this.favouritesList.push(favourite);
  }
  remove(message: any): void {
    this.favouritesList = this.favouritesList.filter(function (value) {
      return value.message !== message;
    });
  }
}
