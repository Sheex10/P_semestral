import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdcomederogatoPageRoutingModule } from './edcomederogato-routing.module';

import { EdcomederogatoPage } from './edcomederogato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdcomederogatoPageRoutingModule
  ],
  declarations: [EdcomederogatoPage]
})
export class EdcomederogatoPageModule {}
