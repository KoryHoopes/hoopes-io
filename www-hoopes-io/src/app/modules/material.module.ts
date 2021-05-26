// Angular
import { NgModule } from '@angular/core';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  exports: [
    MatButtonModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
