import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVariable } from '../../../globals';


@Injectable()
export class CyclecountService {
    private _url: string = GlobalVariable._apiUrl + "/axis/api/v1.0/reports/stores/" + GlobalVariable._storeId + "/cyclecounts?level=summarize&period-filter=today"

    private _url2: string = GlobalVariable._apiUrl + "/axis/api/v1.0/reports/stores/" + GlobalVariable._storeId + "/cyclecounts/tasks?level=summarize"

    constructor(private _http: Http) { }
    getCyclecount() {
        return this._http.get(this._url).map((response: Response) => response.json());
    }

    getPlanned() {
        return this._http.get(this._url2).map((response: Response) => response.json());
    }
}