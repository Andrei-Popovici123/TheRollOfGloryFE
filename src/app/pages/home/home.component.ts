import {Component, HostListener} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {FooterComponent} from '../../common/footer/footer.component';
import {HeaderComponent} from '../../common/header/header.component';
import {RouterLink} from '@angular/router';
import {isValidDate} from 'rxjs/internal/util/isDate';

@Component({
  selector: 'app-home',
  imports: [

    NgForOf,
    NgOptimizedImage,
    FooterComponent,
    HeaderComponent,
    RouterLink,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  registrationOpen: boolean = false;

  constructor() {
  }
  // background image larger with scrolling
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const image = document.getElementById('scrollingImage');
    if (image) {
      const scrollY = window.scrollY; // How much the user has scrolled
      const newHeight = Math.min(800, 600 + scrollY * 0.7); // Scale height (up to 800px)
      image.style.height = `${newHeight}px`;
    }
  }
  ngOnInit(): void {
    this.checkDate();
  }

  checkDate(): void {
    const lastRegistrationDate = new Date('2025-01-19');
    const today = new Date();
    this.registrationOpen = today < lastRegistrationDate;
  }

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
  // articles: { image: string; text: string }[] = [];
  //
  // constructor(private http: HttpClient) {}
  //
  // ngOnInit(): void {
  //   this.fetchArticles();
  // }
  //
  // fetchArticles(): void {
  //   const apiUrl = 'https://example.com/api/articles'; // Replace with your backend API URL
  //   this.http.get<{ image: string; text: string }[]>(apiUrl).subscribe(
  //     (response) => {
  //       this.articles = response;
  //     },
  //     (error) => {
  //       console.error('Error fetching articles:', error);
  //     }
  //   );
  // }



}
