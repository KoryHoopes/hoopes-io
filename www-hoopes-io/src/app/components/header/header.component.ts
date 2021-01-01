// Angular
import { Component } from '@angular/core';
// Data
import { animations, icons, site, socialMedia } from './header.data';
// Interfaces
import { Site, SocialMedia } from './header.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: animations
})
export class HeaderComponent {
  constructor() {}

  mobileMenu = mobileMenu;
  site: Site = site;
  socialMedia: SocialMedia[] = socialMedia;
}

// Component functions
function mobileMenu(): void {
  site.mobileMenu.show = !site.mobileMenu.show;

  if (site.mobileMenu.icon === icons.bars) {
    site.mobileMenu.icon = icons.times;

    return;
  }

  site.mobileMenu.icon = icons.bars;
}
