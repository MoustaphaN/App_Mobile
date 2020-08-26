import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiementFacturePage } from './paiement-facture.page';

const routes: Routes = [
  {
    path: '',
    component: PaiementFacturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiementFacturePageRoutingModule {}
