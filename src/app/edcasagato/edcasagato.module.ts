import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdcasagatoPageRoutingModule } from './edcasagato-routing.module';

import { EdcasagatoPage } from './edcasagato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdcasagatoPageRoutingModule
  ],
  declarations: [EdcasagatoPage]
})
export class EdcasagatoPageModule {}
