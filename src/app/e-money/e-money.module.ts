import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EMoneyPageRoutingModule } from './e-money-routing.module';

import { EMoneyPage } from './e-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EMoneyPageRoutingModule
  ],
  declarations: [EMoneyPage]
})
export class EMoneyPageModule {}
