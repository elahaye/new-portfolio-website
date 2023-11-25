import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public openMenu = false;
  public innerWidth = window.innerWidth;

  public TABLETBREAKPOINT = 768;

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
