import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdcomederoperroPageRoutingModule } from './edcomederoperro-routing.module';

import { EdcomederoperroPage } from './edcomederoperro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdcomederoperroPageRoutingModule
  ],
  declarations: [EdcomederoperroPage]
})
export class EdcomederoperroPageModule {}
