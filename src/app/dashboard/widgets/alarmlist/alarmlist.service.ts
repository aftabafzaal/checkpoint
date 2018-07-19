import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVariable } from '../../../globals';



@Injectable()
export class AlarmlistService {
    private _url: string = GlobalVariable._apiUrl + "/axis/api/v1.0/reports/stores/" + GlobalVariable._storeId + "/activities/events/alerts/theft"
    constructor(private _http: Http) { }
    getAlarmlist() {
        return this._http.get(this._url)
            .map((response: Response) => response.json());
    }
}
