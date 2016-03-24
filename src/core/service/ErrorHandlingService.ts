import {Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

export class ErrorHandlingService {
    public handleError(error: Response): any {
        return Observable.throw(error.json() || 'Unknown Error');
        //TODO: Handle the error
    }
}
