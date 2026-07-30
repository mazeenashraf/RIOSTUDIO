import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Navbar } from './layouts/main-layout/Navbar/navbar/navbar';
import { Footer } from './layouts/main-layout/footer/footer/footer';

import { filter } from 'rxjs';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  protected title = 'RioStudio';

  constructor(private router: Router) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        // الرجوع لأعلى الصفحة بعد التنقل
        window.scrollTo(0, 0);

        // إعادة تهيئة AOS للعناصر الجديدة
        setTimeout(() => {
          AOS.refreshHard();
        }, 100);

      });

  }

  ngAfterViewInit(): void {

    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      mirror: false
    });

  }

}
