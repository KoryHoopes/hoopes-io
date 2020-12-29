import { Component } from '@angular/core';
// Font Awesome
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor() {}

  site = {
    title: 'hoopes.io',
    baseUrl: '/'
  };
  socialMedia = [
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
}
