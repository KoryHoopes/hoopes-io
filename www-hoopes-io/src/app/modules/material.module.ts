// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
