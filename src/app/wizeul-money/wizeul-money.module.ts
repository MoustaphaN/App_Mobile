import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WizeulMoneyPageRoutingModule } from './wizeul-money-routing.module';

import { WizeulMoneyPage } from './wizeul-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WizeulMoneyPageRoutingModule
  ],
  declarations: [WizeulMoneyPage]
})
export class WizeulMoneyPageModule {}
