import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/listar/listar.component';
import { CadastroComponent } from './pages/clientes/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/clientes/cadastro', pathMatch: 'full' },

  { path: 'listar', component: ListarComponent },
  { path: 'clientes/cadastro', component: CadastroComponent }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
