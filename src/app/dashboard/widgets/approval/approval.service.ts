import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVariable } from '../../../globals';


@Injectable()
export class ApprovalService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private _url: string = GlobalVariable._apiUrl + "/axis/api/v1.0/reports/stores/" + GlobalVariable._storeId + "/cyclecounts?level=detail&period-filter=today";
    private _url2: string = GlobalVariable._apiUrl + "/axis/api/v1.0/reports/stores/" + GlobalVariable._storeId + "/cyclecounts/accept";

    constructor(private _http: Http) { }
    getApproval() {
        return this._http.get(this._url)
            .map((response: Response) => response.json());
    }

    update(ccId) {
        console.log('Updated' + '----' + ccId);
        return this._http.put(this._url2 + "/" + ccId, { headers: this.headers })
            .map(success => success.status);
    }

}
