import {Http, Request, RequestOptions, RequestOptionsArgs, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

export class WHttp extends Http {
    public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        let headers = this.GetDefaultHeaders();
        options = options || new RequestOptions({ headers: headers });
        return super.request(url, options);
    }
    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, options);
    }
    public post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, options);
    }
    public put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, options);
    }
    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, options);
    }
    public patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, options);
    }
    public head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.head(url, options);
    }

    private GetDefaultHeaders(): Headers {
        let headers = new Headers({
            'Content-Type': ContentType.JSON,
        });
        return headers;
    }
}

// export class HttpHeaders {
//     public static ContentType = 'Content-Type';
// }

export class ContentType {
    public static JSON: string = 'application/json';
    public static XMl: string = 'application/xml';
}
