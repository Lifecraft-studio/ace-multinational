import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FooterComponent, CarouselModule, HeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss', animations: [
    trigger('activeSlide', [
      state('active', style({
        transform: 'translateY(0)',
        opacity: 1,
      })),
      state('inActive', style({
        transform: 'translateY(50px)',
        opacity: 0,
      })),
      transition('active => inActive', [
        animate('1s')
      ]),
      transition('inActive => active', [
        animate('1s')
      ])
    ]),
    trigger('activeSlideP', [
      state('active', style({
        transform: 'translateY(0)',
        opacity: 1,
      })),
      state('inActive', style({
        transform: 'translateY(50px)',
        opacity: 0,
      })),
      transition('active => inActive', [
        animate('1s')
      ]),
      transition('inActive => active', [
        animate('1s 1s')
      ])
    ]),
  ]
})
export class LandingComponent {
  customOptions: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    center: true,
    navText: ['<img src="assets/icons/left.svg" width="50px" height="50px">', '<img src="assets/icons/right.svg"  width="50px" height="50px">'],
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true
      },
      600: {
        items: 1,
        nav: true,
        loop: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: true
      }
    },
    nav: true
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activatedRoute.fragment.subscribe(fragment => {
          if (fragment) {
            this.scrollTo(fragment);
          }
        });
      }
    });
  }

  scrollTo(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
    }
  }

  goTo(routeString: string) {
    this.router.navigateByUrl(routeString);
  }
}
