import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'portfolio-website';
  public startView: boolean = false;

  constructor(
    private router: Router
  ) {
    router.events.subscribe(event =>{
      if (event instanceof NavigationStart){
         this.scrollToElement(event.url.replace('/', ''));
      }
   })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.startView = true;
    }, 4000);
  }

  private scrollToElement(value: string): void {
    const element = document.getElementById(value);
    if(element) element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
