import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeMoneyPageRoutingModule } from './free-money-routing.module';

import { FreeMoneyPage } from './free-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreeMoneyPageRoutingModule
  ],
  declarations: [FreeMoneyPage]
})
export class FreeMoneyPageModule {}
