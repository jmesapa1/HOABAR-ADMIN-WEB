import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { APP_BASE_HREF, DatePipe } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from "@angular/fire";
import {  NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { DeviceDetectorService } from "ngx-device-detector";
import { DragScrollModule } from 'ngx-drag-scroll';
import { LoginComponent } from "./pages/login/login.component";
import { TokenComponent } from "./pages/token/token.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { MessagingService } from "./services/messaging/messaging.service";
import { ExportarComponent } from './exportar/exportar.component';
import { LoaderInterceptor } from "./interceptors/loader/loader.interceptor";
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
  NgxUiLoaderRouterModule,
  NgxUiLoaderHttpModule
} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig =
{
  "bgsColor": "#70c9c0",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 5,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#b050df",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "ball-scale-multiple",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 200,
  "logoUrl": "assets/img/LOGO.png",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgb(0,0,0)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": false,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
}
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    DragScrollModule,
    TranslateModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent, AdminLayoutComponent,LoginClienteComponent,LoginComponent,TokenComponent,    InicioComponent, ExportarComponent
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },DatePipe,{
    provide: DeviceDetectorService,
  },
  { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },

  MessagingService,
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


  bootstrap: [AppComponent]
})
export class AppModule {}
