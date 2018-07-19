import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVariable } from '../../../globals';


@Injectable()
export class InventoryService {
    private _url: string = GlobalVariable._apiUrl + "/axis/api/v1.0/reports/stores/00FFFFFFF111111000100014/inventory/locations?level=summarize"
    constructor(private _http: Http) { }
    getInventory() {
        return this._http.get(this._url).map((response: Response) => response.json());
    }

    // return Observable.interval(5000)
    //     .switchMap(() => this._http.get(this._url))
    //     .map((response: Response) => response.json())
    //     .takeWhile(() => true);

}
