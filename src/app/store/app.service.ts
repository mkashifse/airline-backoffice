import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';



@Injectable()
export class AbstractService {

    url = 'http://{{host-dev}}';
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

    delete(url: string, ): Observable<any> {
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
        return this.post(`http://{{host-dev}}/admin/amadeus/settings`, values);
    }

    postAmadeusSettings(values: any): Observable<any> {
        return this.post(`http://{{host-dev}}/admin/amadeus/settings`, values);
    }
}
