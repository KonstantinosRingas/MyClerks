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
      icon: 'apple-music',
      url: 'https://music.apple.com/en_us/album/the-dragons-call-ep/1641010541?l=en_us'
    },
    {
      icon: 'itunes',
      url: 'https://music.apple.com/en_us/album/the-dragons-call-ep/1641010541?l=en_us'
    },
    {
      icon: 'tidal',
      url: 'https://store.tidal.com/gr/album/244208475'
    },
    {
      icon: 'amazon',
      url: 'https://music.amazon.com/albums/B0BBD7K2XD'
    },


  ]
}


