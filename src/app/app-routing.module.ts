import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/listar/listar.component';
import { CadastroComponent } from './pages/clientes/cadastro/cadastro.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

const routes: Routes = [
  { path: '', redirectTo: '/clientes/cadastro', pathMatch: 'full' },
  {path: 'servicos', component: ServicosComponent},
  { path: 'listar', component: ListarComponent },
  { path: 'clientes/cadastro', component: CadastroComponent }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
