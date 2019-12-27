import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'vainasortfront';
  public items: MenuItem[];
  public activeItem: MenuItem;

  constructor(
  ) { }

  public ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'fa fa-fw fa-home', routerLink: '/' },
      { label: 'Database', icon: 'fa fa-fw fa-table', routerLink: '/database' },
      { label: 'Sobre', icon: 'fa fa-fw fa-info-circle', routerLink: '/sobre' }
    ];
    this.activeItem = this.items[0];
  }

}
