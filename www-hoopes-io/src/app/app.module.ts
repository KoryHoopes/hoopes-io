// Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Angular Routing
import { RoutingModule } from './modules/routing.module';
// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';
// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Material
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    // Angular Routing
    RoutingModule,
    // Flex Layout
    FlexLayoutModule,
    // Font Awesome
    FontAwesomeModule,
    // Material
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
