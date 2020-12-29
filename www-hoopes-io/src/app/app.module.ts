import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// Flex-Layout
import { FlexLayoutModule } from '@angular/flex-layout';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// App Components
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Flex-Layout
    FlexLayoutModule,
    // Material
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    // Font Awesome
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
