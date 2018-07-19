import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVariable } from '../../../globals';


@Injectable()
export class VisitorService {
    private _url: string = GlobalVariable._apiUrl3 + "/mobileutil/getalldata/1"
    constructor(private _http: Http) { }
    getVisitor() {
        return this._http.get(this._url)
            .map((response: Response) => response.json());
    }
}