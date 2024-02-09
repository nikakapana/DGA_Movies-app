import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  apiKey = 'c6b5ac88f7msh192c3d2e63a0e92p17799djsn375994122d42'


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.apiKey) {
      request = request.clone({
        headers: request.headers.set('X-RapidAPI-Key', ` ${this.apiKey}`)
      })
    }
    return next.handle(request)
  }

}
