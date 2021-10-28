import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './body/account-settings.component';
import { AccountComponent } from './body/account.component';
import { BackToSchoolComponent } from './body/back-to-school';
import { CreditCardsComponent } from './body/credit-cards.component';
import { DealOfTheDayComponent } from './body/deal-of-the-day.component';
import { DigitalLibraryComponent } from './body/digital-library.component';
import { FreeHomeConsultationComponent } from './body/free-home-consultation.component';
import { GiftCardsComponent } from './body/gift-cards.component';
import { GiftIdeasComponent } from './body/gift-ideas.component';
import { HealthAndWellnessComponent } from './body/health-and-wellness.component';
import { MembersOffersComponent } from './body/members-offers.component';
import { OrdersAndPurchasesComponent } from './body/orders-and-purchases.component';
import { PaymentMethodsComponent } from './body/payment-methods.component';
import { ProtectionPlansAndSubscriptionsComponent } from './body/protection-plans-and-subscriptions.component';
import { TopDealsComponent } from './body/top-deals.component';
import { TotalTechSupportComponent } from './body/total-tech-support.component';
import { YourProductsComponent } from './body/your-products.component';
import { HomeLayoutComponent } from './layout/home-layout.component';

const routes: Routes = [
  { path: "Back-to-School", component: BackToSchoolComponent },
  { path: "Top-Deals", component: TopDealsComponent },
  { path: "Deal-of-the-Day", component: DealOfTheDayComponent },
  { path: "Health-&-Wellness", component: HealthAndWellnessComponent },
  { path: "Credit-Cards", component: CreditCardsComponent },
  { path: "Gift-Cards", component: GiftCardsComponent },
  { path: "Gift-Ideas", component: GiftIdeasComponent },
  { path: "Account", component: AccountComponent },
  { path: "Orders-and-purchases", component: OrdersAndPurchasesComponent },
  { path: "Your-products", component: YourProductsComponent },
  { path: "Payment-methods", component: PaymentMethodsComponent },
  { path: "Protection-plans-and-subscriptions", component: ProtectionPlansAndSubscriptionsComponent },
  { path: "Digital-library", component: DigitalLibraryComponent },
  { path: "Total-tech-support", component: TotalTechSupportComponent },
  { path: "Free-home-consultation", component: FreeHomeConsultationComponent },
  { path: "Members-offers", component: MembersOffersComponent },
  {path:"Account-settings",component:AccountSettingsComponent},
  { path: "Home", component: HomeLayoutComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
