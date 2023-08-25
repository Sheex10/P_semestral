import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasagatoPageRoutingModule } from './casagato-routing.module';

import { CasagatoPage } from './casagato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasagatoPageRoutingModule
  ],
  declarations: [CasagatoPage]
})
export class CasagatoPageModule {}
