import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackToSchoolComponent } from './body/back-to-school';
import { CreditCardsComponent } from './body/credit-cards.component';
import { DealOfTheDayComponent } from './body/deal-of-the-day.component';
import { GiftCardsComponent } from './body/gift-cards.component';
import { GiftIdeasComponent } from './body/gift-ideas.component';
import { HealthAndWellnessComponent } from './body/health-and-wellness.component';
import { TopDealsComponent } from './body/top-deals.component';
import { HomeLayoutComponent } from './layout/home-layout.component';

const routes: Routes = [
  { path: 'Back-to-School', component: BackToSchoolComponent },
  {path:"Top-Deals",component:TopDealsComponent},
  {path:"Deal-of-the-Day",component:DealOfTheDayComponent},
  {path:"Health-&-Wellness",component:HealthAndWellnessComponent},
  {path:"Credit-Cards",component:CreditCardsComponent},
  {path:"Gift-Cards",component:GiftCardsComponent},
  {path:"Gift-Ideas",component:GiftIdeasComponent},
  {path:"Home",component:HomeLayoutComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
