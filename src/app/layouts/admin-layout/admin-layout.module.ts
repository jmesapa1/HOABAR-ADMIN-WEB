import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule, HashLocationStrategy, LocationStrategy } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ListaComponent } from 'src/app/pages/ListaMusica/lista.component';
import { DragScrollModule } from "ngx-drag-scroll";
import { InicioComponent } from "src/app/pages/inicio/inicio.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { ListaDjComponent } from "src/app/pages/ListaMusicaDJ/listadj.component";
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
  NgxUiLoaderRouterModule,
  NgxUiLoaderHttpModule
} from 'ngx-ui-loader';
import { LoaderInterceptor } from "src/app/interceptors/loader/loader.interceptor";

const ngxUiLoaderConfig: NgxUiLoaderConfig =
{
  bgsColor: '#70c9c0',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'ball-spin-clockwise',
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: '#22c95f',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'ball-scale-multiple',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 200,
  logoUrl: 'assets/img/LOGO.png',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(0,151,240,0.52)',
  pbColor: 'red',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: false,
  text: '',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 300,
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    DragScrollModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule, // import this module for showing loader automatically when navigating between app routes
    NgxUiLoaderHttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListaComponent,
  DashboardComponent,
  ListaDjComponent  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },

  ]
})
export class AdminLayoutModule {}
