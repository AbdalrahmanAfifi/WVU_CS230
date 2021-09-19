import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutMainComponent } from './layout/layout-main-component';
import { BackToSchoolComponent } from './body/back-to-school.component';
import { TopDealsComponent } from './body/top-deals.component';
import { DealOfTheDayComponent } from './body/deal-of-the-day.component';
import { HealthAndWellnessComponent } from './body/health-and-wellness.component';
import { CreditCardsComponent } from './body/credit-cards.component';
import { GiftCardsComponent } from './body/gift-cards.component';
import { GiftIdeasComponent } from './body/gift-ideas.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent ,
    BottomNavBarComponent,
    LayoutMainComponent,
    BackToSchoolComponent,
    TopDealsComponent,
    DealOfTheDayComponent,
    HealthAndWellnessComponent,
    CreditCardsComponent,
    GiftCardsComponent,
    GiftIdeasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
