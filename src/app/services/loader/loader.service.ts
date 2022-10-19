import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = new Subject<boolean>();

  constructor(private ngxUiLoaderService: NgxUiLoaderService) { }
  show() {
    this.ngxUiLoaderService.start()
  }
  hide() {
    this.ngxUiLoaderService.stop()
  }
}
