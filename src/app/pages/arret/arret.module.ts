import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArretPageRoutingModule } from './arret-routing.module';

import { ArretPage } from './arret.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArretPageRoutingModule
  ],
  declarations: [ArretPage]
})
export class ArretPageModule {}

