import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { AppState } from './store/app.state';

@Injectable()
export class TokenHttpInterceptor implements HttpInterceptor {
    constructor(private store: Store) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.handleAccess(request, next));
    }
    private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
        const token = await this.store.selectOnce(AppState.token).toPromise();
        let changedRequest = request;
        if (token) {
            // HttpHeader object immutable - copy values
            const headerSettings: {
                [name: string]: string | string[];
            } = {};
            for (const key of request.headers.keys()) {
                headerSettings[key] = request.headers.getAll(key);
            }
            headerSettings['x-auth-token'] = token;
            headerSettings['Content-Type'] = 'application/json';
            const newHeader = new HttpHeaders(headerSettings);
            changedRequest = request.clone({
                headers: newHeader
            });
        }
        return next.handle(changedRequest).toPromise();
    }
}
