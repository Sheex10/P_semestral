import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdjugueteperroPageRoutingModule } from './edjugueteperro-routing.module';

import { EdjugueteperroPage } from './edjugueteperro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdjugueteperroPageRoutingModule
  ],
  declarations: [EdjugueteperroPage]
})
export class EdjugueteperroPageModule {}
