import { ComponentFactoryResolver, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { finalize, map, Observable, of, tap, } from 'rxjs';

import { Console } from 'console';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    
    return next.handle(req).pipe(
      tap(
        {


          finalize: (() => {
            this.loaderService.hide();
          }),


          error: (error) => {

            if (error instanceof HttpErrorResponse) {
              //EJECUTA CUALQUIER ERROR QUE POSEAMOS
            }
            return of(error);
          }
        }
      )
    );
  }
}

