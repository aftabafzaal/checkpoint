import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalVariable } from '../../../globals';



@Injectable()
export class AlarmsService {
    private _url: string = GlobalVariable._apiUrl3 + "/mobileutil/getalldata/1"
    private _url2: string = GlobalVariable._apiUrl + "/axis/api/v1.0/reports/stores/" + GlobalVariable._storeId + "/activities/events/alerts/theft"
    constructor(private _http: Http) { }
    getAlarms() {
        return this._http.get(this._url).map((response: Response) => response.json());
    }
    getAlertsTheft() {
        return this._http.get(this._url2)
            .map((response: Response) => response.json());
    }
}
