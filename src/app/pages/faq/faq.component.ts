import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgForOf} from '@angular/common';
import {FooterComponent} from '../../common/footer/footer.component';
import {HeaderComponent} from '../../common/header/header.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  imports: [
    NgForOf, CommonModule, FooterComponent, HeaderComponent
  ],
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs: { id: string; title: string; content: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadFAQs();
  }

  loadFAQs(): void {
    // Placeholder data for FAQs
    this.faqs = [
      { id: 'chapter1', title: 'Chapter 1: Getting Started', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 'chapter2', title: 'Chapter 2: Installation', content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.' },
      { id: 'chapter3', title: 'Chapter 3: Usage', content: 'Sed posuere consectetur est at lobortis. Aenean eu leo quam.' },
      { id: 'chapter4', title: 'Chapter 4: Troubleshooting', content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.' },
      { id: 'chapter4', title: 'Chapter 4: Troubleshooting', content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.' },
      { id: 'chapter4', title: 'Chapter 4: Troubleshooting', content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.' },
      { id: 'chapter4', title: 'Chapter 4: Troubleshooting', content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.' },
      { id: 'chapter4', title: 'Chapter 4: Troubleshooting', content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.' }

    ];
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
