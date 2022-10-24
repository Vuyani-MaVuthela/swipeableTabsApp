import { AboutPageModule } from './../about/about.module';
import { AccountPageModule } from './../account/account.module';
import { NewsPageModule } from './../news/news.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SuperTabsModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
