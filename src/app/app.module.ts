import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ListarComponent } from './pages/listar/listar.component';
import { CadastroComponent } from './pages/clientes/cadastro/cadastro.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AgradecimentoComponent } from './pages/agradecimento/agradecimento.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListarComponent,
    CadastroComponent,
    ServicosComponent,
    AgradecimentoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
