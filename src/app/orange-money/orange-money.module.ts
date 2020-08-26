import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrangeMoneyPageRoutingModule } from './orange-money-routing.module';

import { OrangeMoneyPage } from './orange-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrangeMoneyPageRoutingModule
  ],
  declarations: [OrangeMoneyPage]
})
export class OrangeMoneyPageModule {}
