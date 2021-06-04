// Angular
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
// Data
import { icons, site, socialMedia } from './header.data';
// Interfaces
import { Site, SocialMedia } from './header.interfaces';
// Material 
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('toggleMobileMenu', [
      transition(':enter', [
        style({
          top: '-22px'
        }),
        animate(
          '.5s ease-in-out',
          style({
            top: '80px'
          })
        )
      ]),
      transition(':leave', [
        style({}),
        animate(
          '.5s ease-in-out',
          style({
            top: '-22px'
          })
        )
      ])
    ])
  ]
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) { }

  site: Site = site;
  socialMedia: SocialMedia[] = socialMedia;

  // Component functions
  mobileMenu(): void {
    site.mobileMenu.show = !site.mobileMenu.show;

    if (site.mobileMenu.icon === icons.bars) {
      site.mobileMenu.icon = icons.times;

      return;
    }
    
    site.mobileMenu.icon = icons.bars;
  }

  // Email modal
  openEmail() {
    this.dialog.open(EmailDialog);
  }
}

@Component({
  selector: 'email-dialog',
  templateUrl: './email-dialog.html',
  styleUrls: ['./header.component.scss']
})
export class EmailDialog {
  constructor(
    public dialogRef: MatDialogRef<EmailDialog>) { }
  
  closeEmail(): void {
    this.dialogRef.close();
  }
}

