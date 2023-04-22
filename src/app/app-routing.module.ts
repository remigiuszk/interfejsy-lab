import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { MiscComponent } from './components/misc/misc.component';
import { AuthenticationsComponent } from './components/authentications/authentications.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'layouts',
    component: LayoutsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'account-settings',
    component: AccountSettingsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auths',
    component: AuthenticationsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'misc',
    component: MiscComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
