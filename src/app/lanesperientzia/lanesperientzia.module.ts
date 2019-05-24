import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LanesperientziaPage } from './lanesperientzia.page';

const routes: Routes = [
  {
    path: '',
    component: LanesperientziaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LanesperientziaPage]
})
export class LanesperientziaPageModule {}
