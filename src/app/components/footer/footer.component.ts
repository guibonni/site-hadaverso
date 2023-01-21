import { Component, OnInit } from '@angular/core';
import { IconLink } from '../icon-link/icon-link.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public socialMedia: IconLink[] = [
    {
      clickUrl: 'https://twitter.com/smolsheey',
      imageUrl: '../../../assets/social-media/twitter.png'
    },
    {
      clickUrl: 'https://www.youtube.com/@smolsheey',
      imageUrl: '../../../assets/social-media/youtube.png'
    },
    {
      clickUrl: 'https://www.twitch.tv/smolsheey',
      imageUrl: '../../../assets/social-media/twitch.png'
    },
    {
      clickUrl: 'https://ko-fi.com/minisheey',
      imageUrl: '../../../assets/social-media/kofi.png'
    },
    {
      clickUrl: 'https://ko-fi.com/smolsheey',
      imageUrl: '../../../assets/social-media/kofi-2.png'
    },
    {
      clickUrl: 'https://www.tiktok.com/@smolsheey',
      imageUrl: '../../../assets/social-media/tiktok.png'
    }
  ];

  public mail: string = 'sheeykamui@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

  public getMailToString(): string {
    return `mailto:${this.mail}`;
  }

}
