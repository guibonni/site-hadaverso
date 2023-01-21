import { Component, Input, OnInit } from '@angular/core';
import { IconLink } from './icon-link.model';

@Component({
  selector: 'icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.css']
})
export class IconLinkComponent implements OnInit {

  @Input() links: IconLink = {
    clickUrl: '',
    imageUrl: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
