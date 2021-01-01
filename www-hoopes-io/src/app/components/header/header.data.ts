// Angular
import { trigger, transition, style, animate } from '@angular/animations';
// Font Awesome
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

const animations = [
  trigger('toggleMobileMenu', [
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate(
        '.25s ease-in-out',
        style({
          opacity: 1
        })
      )
    ]),
    transition(':leave', [
      style({
        opacity: 1
      }),
      animate(
        '.25s ease-in-out',
        style({
          opacity: 0
        })
      )
    ])
  ])
];
const icons = {
  bars: faBars,
  gitHub: faGithub,
  linkedIn: faLinkedinIn,
  times: faTimes,
  twitter: faTwitter
};
const site = {
  title: 'hoopes.io',
  baseUrl: '/',
  mobileMenu: {
    icon: faBars,
    show: false
  }
};
const socialMedia = [
  {
    name: 'Github',
    icon: icons.gitHub,
    url: 'https://www.github.com/koryhoopes'
  },
  {
    name: 'LinkedIn',
    icon: icons.linkedIn,
    url: 'https://www.linkedin.com/in/kory-hoopes'
  },
  {
    name: 'Twitter',
    icon: icons.twitter,
    url: 'https://www.twitter.com/koryhoopes'
  }
];

export { animations, icons, site, socialMedia };
