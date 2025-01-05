import { Component } from '@angular/core';
import {isNgContainer} from '@angular/compiler';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
isRegistered = false;
  toggleRegistered = () => {
    this.isRegistered = !this.isRegistered;
  }
  isProfileComplete = false;
  toggleCompletedProfile = () => {
    this.isProfileComplete= !this.isProfileComplete;
  }

}
