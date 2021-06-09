import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private router: Router,
              private titleService: Title,
              private activatedRoute: ActivatedRoute) { }


  getTitle(){
    const appTitle = this.titleService.getTitle();
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child.firstChild) {
          child = child.firstChild;
        }
        if (child.snapshot.data['title']) {
          console.log(child.snapshot.data['title'])
          return child.snapshot.data['title'];
        }
        return appTitle;
        })
      ).subscribe((ttl: string) => {
        this.titleService.setTitle(ttl);
      });
  }

}
