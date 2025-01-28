import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';

import { ListarComponent } from './pages/listar/listar.component';
import { CadastroComponent } from './pages/clientes/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListarComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
