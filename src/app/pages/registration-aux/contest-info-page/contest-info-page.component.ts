import { Component, OnInit } from '@angular/core';
import {SidebarComponent} from '../../../common/sidebar/sidebar.component';

@Component({
  selector: 'app-contest-info',
  templateUrl: './contest-info-page.component.html',
  styleUrls: ['./contest-info-page.component.scss'],
  imports: [
    SidebarComponent
  ],
  // Correct path here
})
export class ContestInfoPageComponent implements OnInit {
  group: string;
  participantNumber: number;

  constructor() {
    this.group = '';
    this.participantNumber = 0;
  }

  ngOnInit(): void {
    this.fetchContestInfo();
  }

  fetchContestInfo(): void {
    // Simulating data fetch
    this.group = 'Group 3';
    this.participantNumber = 42;
  }
}
