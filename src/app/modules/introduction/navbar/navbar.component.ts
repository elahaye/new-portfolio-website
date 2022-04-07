import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public openMenu: boolean= false;
  public innerWidth: number = 0;

  public TABLETBREAKPOINT: number = 768;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  public onCloseMenu(): void {
    setTimeout(() => {
      this.openMenu = false;
    }, 500);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;

    if(this.innerWidth >= this.TABLETBREAKPOINT) this.openMenu = false;
  }

}
