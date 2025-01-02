import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {RouterModule} from '@angular/router';
import {FooterComponent} from './common/footer/footer.component';
import {HeaderComponent} from './common/header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FooterComponent, HeaderComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TheRollOfGloryFE';
}
