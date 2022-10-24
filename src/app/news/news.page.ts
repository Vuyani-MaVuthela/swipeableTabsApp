import { NewsDetailsPage } from './../news-details/news-details.page';
import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';
import { SuperTabs } from '@ionic-super-tabs/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsDetails = NewsDetailsPage;

  constructor(private nav: IonNav, private supTabs: SuperTabs) {}

  ngOnInit() {}

  openDetails() {
    this.nav.push(this.newsDetails);
  }

  openAboutTab() {
    this.supTabs.selectTab(2);
  }
}
