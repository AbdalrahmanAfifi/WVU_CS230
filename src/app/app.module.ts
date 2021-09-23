import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BackToSchoolComponent } from './body/back-to-school';
import { CreditCardsComponent } from './body/credit-cards.component';
import { DealOfTheDayComponent } from './body/deal-of-the-day.component';
import { GiftCardsComponent } from './body/gift-cards.component';
import { GiftIdeasComponent } from './body/gift-ideas.component';
import { HealthAndWellnessComponent } from './body/health-and-wellness.component';
import { TopDealsComponent } from './body/top-deals.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { LayoutMainComponent } from './layout/layout-main-component';







@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    LayoutMainComponent,
    BackToSchoolComponent,
    TopDealsComponent,
    DealOfTheDayComponent,
    HealthAndWellnessComponent,
    CreditCardsComponent,
    GiftCardsComponent,
    GiftIdeasComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
