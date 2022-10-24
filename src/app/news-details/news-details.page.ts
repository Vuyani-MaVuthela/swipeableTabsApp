import { IonNav } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage implements OnInit {
  constructor(private nav: IonNav) {}

  ngOnInit() {}

  goBack() {
    this.nav.pop();
  }
}
