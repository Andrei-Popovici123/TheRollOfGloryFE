import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './common/footer/footer.component';
import {HeaderComponent} from './common/header/header.component';
import {RegistrationFormComponent} from './pages/registration-form/registration-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, RouterModule, FooterComponent, HeaderComponent, RegistrationFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TheRollOfGloryFE';
}
