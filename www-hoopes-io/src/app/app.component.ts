import { Component } from '@angular/core';

// Font Awesome
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hoopes.io';
  iconGithub = faGithub;
};
