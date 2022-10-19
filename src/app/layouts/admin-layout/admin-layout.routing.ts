import { Routes } from "@angular/router";
import { ListaComponent } from 'src/app/pages/ListaMusica/lista.component';

import { InicioComponent } from "src/app/pages/inicio/inicio.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { AuthGuard } from "src/app/guards/auth/auth.guard";
import { ListaDjComponent } from "src/app/pages/ListaMusicaDJ/listadj.component";

export const AdminLayoutRoutes: Routes = [
  {path:'lista',component:ListaComponent,    canActivate:[AuthGuard]},
  {path:'listadj',component:ListaDjComponent},

  {path:'**',redirectTo:"lista"},


];
