import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenEauPageRoutingModule } from './sen-eau-routing.module';

import { SenEauPage } from './sen-eau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenEauPageRoutingModule
  ],
  declarations: [SenEauPage]
})
export class SenEauPageModule {}
