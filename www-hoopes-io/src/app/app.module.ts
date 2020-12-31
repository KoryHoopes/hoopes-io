// Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';
// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Material
import { MaterialModule } from './modules/material.module';
// Routing
import { RoutingModule } from './modules/routing.module';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    NavigationComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    // Flex Layout
    FlexLayoutModule,
    // Font Awesome
    FontAwesomeModule,
    // Material
    MaterialModule,
    // Routing
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
