import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'servicos', loadChildren: './servicos/servicos.module#ServicosPageModule' },
  { path: 'dados-agendamento', loadChildren: './dados-agendamento/dados-agendamento.module#DadosAgendamentoPageModule' },
  { path: 'tela-agendamento', loadChildren: './tela-agendamento/tela-agendamento.module#TelaAgendamentoPageModule' },
  { path: 'profissional', loadChildren: './profissional/profissional.module#ProfissionalPageModule' },
  { path: 'recuperacao-senha', loadChildren: './recuperacao-senha/recuperacao-senha.module#RecuperacaoSenhaPageModule' },
  { path: 'meus-dados', loadChildren: './meus-dados/meus-dados.module#MeusDadosPageModule' },
  { path: 'configuracoes', loadChildren: './configuracoes/configuracoes.module#ConfiguracoesPageModule' },
  { path: 'conta', loadChildren: './conta/conta.module#ContaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
