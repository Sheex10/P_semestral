import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaperroPageRoutingModule } from './camaperro-routing.module';

import { CamaperroPage } from './camaperro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaperroPageRoutingModule
  ],
  declarations: [CamaperroPage]
})
export class CamaperroPageModule {}
