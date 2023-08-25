import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasaperroPageRoutingModule } from './casaperro-routing.module';

import { CasaperroPage } from './casaperro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasaperroPageRoutingModule
  ],
  declarations: [CasaperroPage]
})
export class CasaperroPageModule {}
