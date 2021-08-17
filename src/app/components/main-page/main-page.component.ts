import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile/profile';
import { HttpService } from '../../http.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
})
export class MainPageComponent implements OnInit {
  constructor(private httpService: HttpService) {}
  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.httpService.sendGetRequest().subscribe((responseBody) => {
        this.profiles.push(responseBody);
      });
    }
  }

  selectedColor: string = 'white';
  current: number = 0;

  toggleNext(reverse: boolean): void {
    if (reverse) {
      this.profiles.unshift(this.profiles[this.profiles.length - 1]);
      this.profiles.pop();
    } else {
      this.profiles.push(this.profiles[0]);
      this.profiles.shift();
    }
  }

  colors = [
    {
      name: 'white',
      value: '#ffffff',
    },
    {
      name: 'yellow',
      value: '#fee100',
    },
    {
      name: 'red',
      value: '#ff3747',
    },
    {
      name: 'pink',
      value: '#ffae90',
    },
  ];

  onChange(event: Event) {
    this.selectedColor = (event.target as HTMLSelectElement).value;
  }
  profiles: any[] = [];
  // profiles: any[] = [
  //   {
  //     profile: [
  //       {
  //         title: 'Name',
  //         input: 'Jack',
  //       },
  //       {
  //         title: 'Email',
  //         input: 'JackyMao@yahoo.gr',
  //       },
  //       {
  //         title: 'Phone number',
  //         input: '6928924729',
  //       },
  //       {
  //         title: 'Location',
  //         input: 'Athens, Greece',
  //       },
  //     ],
  //     image: 'https://randomuser.me/api/portraits/thumb/men/25.jpg',
  //   },
  //   {
  //     profile: [
  //       {
  //         title: 'Name',
  //         input: 'Joe',
  //       },
  //       {
  //         title: 'Email',
  //         input: 'JackyMao@yahoo.gr',
  //       },
  //       {
  //         title: 'Phone number',
  //         input: '6928924729',
  //       },
  //       {
  //         title: 'Location',
  //         input: 'Athens, Greece',
  //       },
  //     ],
  //     image: 'https://randomuser.me/api/portraits/thumb/men/46.jpg',
  //   },
  //   {
  //     profile: [
  //       {
  //         title: 'Name',
  //         input: 'Mill',
  //       },
  //       {
  //         title: 'Email',
  //         input: 'JackyMao@yahoo.gr',
  //       },
  //       {
  //         title: 'Phone number',
  //         input: '6928924729',
  //       },
  //       {
  //         title: 'Location',
  //         input: 'Athens, Greece',
  //       },
  //     ],
  //     image: 'https://randomuser.me/api/portraits/thumb/women/75.jpg',
  //   },
  //   {
  //     profile: [
  //       {
  //         title: 'Name',
  //         input: 'Eddie',
  //       },
  //       {
  //         title: 'Email',
  //         input: 'JackyMao@yahoo.gr',
  //       },
  //       {
  //         title: 'Phone number',
  //         input: '6928924729',
  //       },
  //       {
  //         title: 'Location',
  //         input: 'Athens, Greece',
  //       },
  //     ],
  //     image: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
  //   },
  // ];
}
