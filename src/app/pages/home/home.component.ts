import { Component } from '@angular/core';
import {HeaderComponent} from '../../common/header/header.component';
import {FooterComponent} from '../../common/footer/footer.component';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  articles = [
    {
      image: 'https://via.placeholder.com/400x200',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tincidunt elit.'
    },
    {
      image: 'https://via.placeholder.com/400x200',
      text: 'Nulla vehicula, magna ut scelerisque fringilla, purus enim pellentesque nisi.'
    },
    {
      image: 'https://via.placeholder.com/400x200',
      text: 'Mauris ultricies mollis ligula non gravida. Fusce sit amet mi odio.'
    },
    {
      image: 'https://via.placeholder.com/400x200',
      text: 'Curabitur in feugiat nunc, sit amet bibendum arcu. Nam vitae fringilla ligula.'
    }
  ];
}
