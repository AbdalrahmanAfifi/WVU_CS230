import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackToSchoolComponent } from './body/back-to-school';
import { CardComponent } from './body/card.component';
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
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './body/account.component';
import { OrdersAndPurchasesComponent } from './body/orders-and-purchases.component';
import { YourProductsComponent } from './body/your-products.component';
import { PaymentMethodsComponent } from './body/payment-methods.component';
import { ProtectionPlansAndSubscriptionsComponent } from './body/protection-plans-and-subscriptions.component';
import { DigitalLibraryComponent } from './body/digital-library.component';
import { TotalTechSupportComponent } from './body/total-tech-support.component';
import { FreeHomeConsultationComponent } from './body/free-home-consultation.component';
import { MembersOffersComponent } from './body/members-offers.component';
import { AccountSettingsComponent } from './body/account-settings.component';






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
    HomeLayoutComponent,
    CardComponent,
    UserInfoComponent,
    AccountComponent,
    OrdersAndPurchasesComponent,
    YourProductsComponent,
    PaymentMethodsComponent,
    ProtectionPlansAndSubscriptionsComponent,
    DigitalLibraryComponent,
    TotalTechSupportComponent,
    FreeHomeConsultationComponent,
    MembersOffersComponent,
    AccountSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
