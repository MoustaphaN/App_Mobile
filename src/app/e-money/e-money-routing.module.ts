import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EMoneyPage } from './e-money.page';

const routes: Routes = [
  {
    path: '',
    component: EMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EMoneyPageRoutingModule {}
