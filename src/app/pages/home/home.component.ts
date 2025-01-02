import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [

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
