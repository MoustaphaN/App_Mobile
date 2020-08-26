import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WoyafalPage } from './woyafal.page';

const routes: Routes = [
  {
    path: '',
    component: WoyafalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WoyafalPageRoutingModule {}
