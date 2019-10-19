import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelaPrincipalPage } from './tela-principal.page';

const routes: Routes = [
  {
    path: '',
    component: TelaPrincipalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelaPrincipalPage]
})
export class TelaPrincipalPageModule {}
