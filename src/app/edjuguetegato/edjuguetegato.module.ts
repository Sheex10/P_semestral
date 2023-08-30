import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdjuguetegatoPageRoutingModule } from './edjuguetegato-routing.module';

import { EdjuguetegatoPage } from './edjuguetegato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdjuguetegatoPageRoutingModule
  ],
  declarations: [EdjuguetegatoPage]
})
export class EdjuguetegatoPageModule {}
