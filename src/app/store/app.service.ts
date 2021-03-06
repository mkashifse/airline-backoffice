import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable()
export class AbstractService {

    url = 'http://18.218.245.225:3000/';
    options: any = {};

    constructor(
        private http: HttpClient,
    ) {

    }

    post(url: string, payload: any): Observable<any> {
        return this.http.post(this.url + url, payload, this.options);
    }

    put(url: string, payload: any): Observable<any> {
        return this.http.put(this.url + url, payload, this.options);
    }

    get(url: string): Observable<any> {
        return this.http.get(this.url + url, this.options);
    }

    delete(url: string): Observable<any> {
        return this.http.delete(this.url + url, this.options);
    }

}


@Injectable()
export class AppService extends AbstractService {


    constructor(
        http: HttpClient
    ) {
        super(http);
    }

    login(values: any): Observable<any> {
        return this.post(`admin/login`, values);
    }

    postAmadeusSettings(values: any): Observable<any> {
        return this.post(`admin/amadeus/settings`, values);
    }

    editAmadeusSettings(values: any): Observable<any> {
        return this.put(`admin/amadeus/settings`, values);
    }

    getAmadeusSettings(): Observable<any> {
        return this.get(`admin/amadeus/settings`);
    }
}
