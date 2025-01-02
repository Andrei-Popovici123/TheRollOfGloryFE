import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RegistrationFormComponent} from './pages/registration-form/registration-form.component';

const routeConfig: Routes = [
   {path: '', component: HomeComponent, title: 'Home Page',},
   {path: 'register',component: RegistrationFormComponent, title: 'Register',},
 ];
 export default routeConfig;

