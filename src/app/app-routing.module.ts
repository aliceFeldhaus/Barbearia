import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos.component';
import { AgendarComponent } from './agendar/agendar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'agendar', component: AgendarComponent},
  {path: 'meus-agendamentos', component: MeusAgendamentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
