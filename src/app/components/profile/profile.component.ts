import { Component, } from '@angular/core';
import { Media } from './media';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent {
  constructor() { }

  media: Media[] = [
    {
      icon: 'spotify',
      url: 'https://open.spotify.com/album/7ily4mHJJQh8MlT9d9oKLK?si=HUPomK9kQ76e6l5uwmaCdg&nd=1'
    },
    {
      icon: 'youtube',
      url: 'https://music.youtube.com/playlist?list=OLAK5uy_my1YUgke4cj4LIMwDTgxLz9WeuQ7vNbUI'
    },
    {
      icon: 'deezer',
      url: 'https://music.youtube.com/playlist?list=OLAK5uy_my1YUgke4cj4LIMwDTgxLz9WeuQ7vNbUI'
    },
    {
      icon: 'apple-music',
      url: 'https://music.youtube.com/playlist?list=OLAK5uy_my1YUgke4cj4LIMwDTgxLz9WeuQ7vNbUI'
    }

  ]
}


