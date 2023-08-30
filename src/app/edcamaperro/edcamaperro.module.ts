import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdcamaperroPageRoutingModule } from './edcamaperro-routing.module';

import { EdcamaperroPage } from './edcamaperro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdcamaperroPageRoutingModule
  ],
  declarations: [EdcamaperroPage]
})
export class EdcamaperroPageModule {}
