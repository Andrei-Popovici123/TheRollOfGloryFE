import { Component } from '@angular/core';
import {isNgContainer} from '@angular/compiler';
import {CommonModule} from '@angular/common';

import {RouterModule,RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
isRegistered = false;
registrationOpen: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.checkDate();
  }

  // fetchRegistrationDate(): Observable<Date> {
  //   return this.http.get<Date>('https://');
  // }
  checkDate(): void {
    const lastRegistrationDate = new Date('2025-01-19');
    const today = new Date();
    this.registrationOpen = today < lastRegistrationDate;
  }
  toggleRegistered = () => {
    this.isRegistered = !this.isRegistered;
  }
  isProfileComplete = false;
  toggleCompletedProfile = () => {
    this.isProfileComplete= !this.isProfileComplete;
  }

}
