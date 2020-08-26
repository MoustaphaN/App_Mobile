import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YupPageRoutingModule } from './yup-routing.module';

import { YupPage } from './yup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YupPageRoutingModule
  ],
  declarations: [YupPage]
})
export class YupPageModule {}
