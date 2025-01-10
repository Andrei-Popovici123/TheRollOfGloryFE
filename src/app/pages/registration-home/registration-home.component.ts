import { Component } from '@angular/core';
import {SidebarComponent} from '../../common/sidebar/sidebar.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-registration-home',
  standalone: true,
  imports: [
    CommonModule,SidebarComponent,
  ],
  templateUrl: './registration-home.component.html',
  styleUrl: './registration-home.component.scss'
})export class RegistrationHomeComponent {

}
