import {Http, Request, RequestOptionsArgs, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

export class WHttp extends Http {
    public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }
    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, options);
    }
    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, options);
    }
    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, options);
    }
    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, options);
    }
    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, options);
    }
    head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.head(url, options);
    }
}
