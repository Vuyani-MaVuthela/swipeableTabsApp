import { IonNav } from '@ionic/angular';
import { NewsPage } from './../news/news.page';
import { AccountPage } from './../account/account.page';
import { AboutPage } from './../about/about.page';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  newsPage = NewsPage;
  accountPage = AccountPage;
  aboutPage = AboutPage;

  canGoBack = false;
  title = 'News';

  @ViewChild('newsNav', { static: false }) newsNav: IonNav;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.newsNav.ionNavDidChange.subscribe(async (e) => {
      this.canGoBack = await this.newsNav.canGoBack();
    });
  }

  goBack() {
    this.newsNav.pop();
  }

  onTabChange(e: CustomEvent<any>) {
    switch (e.detail.index) {
      case 0:
        this.title = 'News';
        break;
      case 1:
        this.title = 'Account';
        break;
      case 2:
        this.title = 'About';
        break;
    }
  }
}
