import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenEauPage } from './sen-eau.page';

const routes: Routes = [
  {
    path: '',
    component: SenEauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenEauPageRoutingModule {}
