import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdcamagatoPageRoutingModule } from './edcamagato-routing.module';

import { EdcamagatoPage } from './edcamagato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdcamagatoPageRoutingModule
  ],
  declarations: [EdcamagatoPage]
})
export class EdcamagatoPageModule {}
