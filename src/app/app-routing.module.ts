import { NgModule } from "@angular/core";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';


import { InicioComponent } from "./pages/inicio/inicio.component";
import { TokenComponent } from "./pages/token/token.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./guards/auth/auth.guard";
import { ExportarComponent } from "./exportar/exportar.component";

const routes: Routes = [
  {
    path: "token", component: TokenComponent, canActivate: [AuthGuard],

  },
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "exportar",
    component: ExportarComponent,
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: 'full'
  },

  {
    path: "landing",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      }
    ]
  },

  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: 'full'
  },
  {
    path: "**",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
