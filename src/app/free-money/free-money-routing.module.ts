import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreeMoneyPage } from './free-money.page';

const routes: Routes = [
  {
    path: '',
    component: FreeMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeMoneyPageRoutingModule {}
