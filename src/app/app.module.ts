import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavButtonComponent } from './components/side-nav/nav-group/nav-button/nav-button.component';
import { NavGroupComponent } from './components/side-nav/nav-group/nav-group.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ContentCardComponent } from './components/content-card/content-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavButtonComponent,
    NavGroupComponent,
    SideNavComponent,
    SearchBarComponent,
    ContentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
