import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdcasaperroPageRoutingModule } from './edcasaperro-routing.module';

import { EdcasaperroPage } from './edcasaperro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdcasaperroPageRoutingModule
  ],
  declarations: [EdcasaperroPage]
})
export class EdcasaperroPageModule {}
