// Angular
import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
// Font Awesome
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
// Model
import { SocialMedia } from '../../models/navigation/navigation.interface';

// Component data
const site = {
  title: 'hoopes.io',
  baseUrl: '/',
  mobileMenu: {
    icon: faBars,
    show: false
  }
},
socialMedia: SocialMedia[] = [
  {
    name: 'Github',
    icon: faGithub,
    url: 'https://www.github.com/koryhoopes'
  },
  {
    name: 'LinkedIn',
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com/in/kory-hoopes'
  },
  {
    name: 'Twitter',
    icon: faTwitter,
    url: 'https://www.twitter.com/koryhoopes'
  }
];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger(
      'toggleMobileMenu',
      [
        transition(
          ':enter',
          [
            style({
              opacity: 0
            }),
            animate(
              '.25s ease-out',
              style({
                opacity: 1
            }))
          ]
        ),
        transition(
          ':leave',
          [
            style({
              opacity: 1
            }),
            animate(
              '.25s ease-out',
              style({
                opacity: 0
            }))
          ]
        )
      ]
    )
  ]
})
export class NavigationComponent {
  constructor() {}

  site = site;
  socialMedia = socialMedia;

  mobileMenu = mobileMenu;
}

// Component functions
function mobileMenu() {
  site.mobileMenu.show = !site.mobileMenu.show;

  if (site.mobileMenu.icon === faBars ) {
    site.mobileMenu.icon = faTimes;

    return;
  }

  site.mobileMenu.icon = faBars;
}
