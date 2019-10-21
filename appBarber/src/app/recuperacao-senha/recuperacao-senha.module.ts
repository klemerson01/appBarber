import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecuperacaoSenhaPage } from './recuperacao-senha.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperacaoSenhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecuperacaoSenhaPage]
})
export class RecuperacaoSenhaPageModule {}
