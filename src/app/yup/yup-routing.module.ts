import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YupPage } from './yup.page';

const routes: Routes = [
  {
    path: '',
    component: YupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YupPageRoutingModule {}
