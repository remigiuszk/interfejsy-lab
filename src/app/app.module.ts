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
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { MainComponent } from './components/main/main.component';
import { AuthenticationsComponent } from './components/authentications/authentications.component';
import { MiscComponent } from './components/misc/misc.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    NavButtonComponent,
    NavGroupComponent,
    SideNavComponent,
    SearchBarComponent,
    ContentCardComponent,
    AccountSettingsComponent,
    LayoutsComponent,
    MainComponent,
    AuthenticationsComponent,
    MiscComponent,
    ChatComponent,
    SignInComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
