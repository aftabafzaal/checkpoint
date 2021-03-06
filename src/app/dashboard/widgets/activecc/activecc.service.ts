import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVariable } from '../../../globals';


@Injectable()
export class ActiveccService {
    private _url: string = GlobalVariable._apiUrl + "/axis/api/v1.0/reports/stores/"+  GlobalVariable._storeId +"/cyclecounts/latest"
    constructor(private _http: Http) { }
    getActivecc() {
        return this._http.get(this._url)
            .map((response: Response) => response.json());
    }
}