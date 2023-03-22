import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AgendarComponent } from './agendar/agendar.component';
import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AgendarComponent,
    MeusAgendamentosComponent,
    BarraNavegacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
