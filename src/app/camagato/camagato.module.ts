import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamagatoPageRoutingModule } from './camagato-routing.module';

import { CamagatoPage } from './camagato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamagatoPageRoutingModule
  ],
  declarations: [CamagatoPage]
})
export class CamagatoPageModule {}
