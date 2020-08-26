import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiementFacturePageRoutingModule } from './paiement-facture-routing.module';

import { PaiementFacturePage } from './paiement-facture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiementFacturePageRoutingModule
  ],
  declarations: [PaiementFacturePage]
})
export class PaiementFacturePageModule {}
