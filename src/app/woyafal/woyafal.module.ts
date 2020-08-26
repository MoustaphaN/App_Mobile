import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WoyafalPageRoutingModule } from './woyafal-routing.module';

import { WoyafalPage } from './woyafal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WoyafalPageRoutingModule
  ],
  declarations: [WoyafalPage]
})
export class WoyafalPageModule {}
