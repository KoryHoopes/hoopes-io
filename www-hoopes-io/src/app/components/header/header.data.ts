// Angular
import { trigger, transition, style, animate } from '@angular/animations';
// Font Awesome
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

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
  times: faTimes
};
const site = {
  title: 'hoopes.io',
  email: faEnvelope,
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
  }
];

export { animations, icons, site, socialMedia };
