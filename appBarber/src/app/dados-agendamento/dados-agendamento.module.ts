import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DadosAgendamentoPage } from './dados-agendamento.page';

const routes: Routes = [
  {
    path: '',
    component: DadosAgendamentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DadosAgendamentoPage]
})
export class DadosAgendamentoPageModule {}
