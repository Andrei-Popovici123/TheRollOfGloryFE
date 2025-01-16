import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../../common/header/header.component';
import {FooterComponent} from '../../common/footer/footer.component';

@Component({
  selector: 'app-about',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  aboutContent: string;

  constructor() {
    this.aboutContent = '';
  }

  ngOnInit(): void {
    this.fetchAboutContent();
  }

  fetchAboutContent(): void {
    // Simulate fetching data from the backend
    this.aboutContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...`;
  }
}
