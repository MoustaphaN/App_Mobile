import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WizeulMoneyPage } from './wizeul-money.page';

const routes: Routes = [
  {
    path: '',
    component: WizeulMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizeulMoneyPageRoutingModule {}
