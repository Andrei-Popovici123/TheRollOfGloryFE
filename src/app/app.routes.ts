import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {FaqComponent} from './pages/faq/faq.component';
import {RegistrationHomeComponent} from './pages/registration-home/registration-home.component';
import { ContestInfoPageComponent } from './pages/registration-aux/contest-info-page/contest-info-page.component';
import {LoginPageComponent} from './pages/registration-aux/login-page/login-page.component';
import {RegisterPageComponent} from './pages/registration-aux/register-page/register-page.component';
import {ProfilePageComponent} from './pages/registration-aux/profile-page/profile-page.component';
import {AccountPageComponent} from './pages/registration-aux/account-page/account-page.component';

const routeConfig: Routes = [
   {path: '', component: HomeComponent, title: 'Home Page',},
  {path: 'faq', component: FaqComponent, title: 'Faq Page',},
   {path: 'register-home',component: RegistrationHomeComponent, title: 'Register Home',},
  {path: 'login',component: LoginPageComponent, title: 'Login Page',},
  {path: 'register',component: RegisterPageComponent, title: 'Register Page',},
  {path: 'profile',component: ProfilePageComponent, title: 'Profile Page',},
   {path: 'contestInfo',component: ContestInfoPageComponent, title: 'Contest Info Page',},
  {path: 'account',component: AccountPageComponent, title: 'Account Page',},

 ];
 export default routeConfig;

