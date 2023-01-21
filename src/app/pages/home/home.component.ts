import { Component, OnInit } from '@angular/core';
import { MenuOption } from '../../components/menu-bar/menu-bar.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public menuOption: MenuOption = MenuOption.HOME;

  constructor() { }

  ngOnInit(): void { }

}
