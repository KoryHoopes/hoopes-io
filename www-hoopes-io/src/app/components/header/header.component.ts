// Angular
import { Component } from '@angular/core';
// Data
import { animations, icons, site, socialMedia } from './header.data';
// Interfaces
import { Site, SocialMedia } from './header.interfaces';
// Material 
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: animations
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

  openEmail() {
    this.dialog.open(EmailDialog);
  }
}

@Component({
  selector: 'email-dialog',
  templateUrl: 'email-dialog.html',
  styleUrls: ['./header.component.scss']
})
export class EmailDialog {
  constructor(
    public dialogRef: MatDialogRef<EmailDialog>) { }
  
  closeEmail(): void {
    this.dialogRef.close();
  }
}

