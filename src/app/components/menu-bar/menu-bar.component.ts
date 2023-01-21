import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MenuOption } from './menu-bar.model';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  public menuItems: Array<MenuItem> = [
    { id: MenuOption.HOME, url: 'home', name: 'Home', activated: true },
    { id: MenuOption.CHARACTERS, url: 'characters', name: 'Characters', activated: false },
  ]

  constructor(private router: Router) { }

  public ngOnInit(): void { }

  private verifyActivatedOption(menuOption: MenuOption): void {
    this.menuItems.map((item) => {
      item.activated = item.id === menuOption
    });
  }

  public goToPage(menuItem: MenuItem): void {
    this.router.navigate([menuItem.url]);
    this.verifyActivatedOption(menuItem.id);
  }

  public getBtnClass(menuItem: MenuItem) {
    return !menuItem.activated ? 'btn btn-sm btn-light btn-letter-outline m-1' : 'btn btn-sm btn-outline-light m-1';
  }

}
