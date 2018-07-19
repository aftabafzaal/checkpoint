import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVariable } from '../../../globals';


@Injectable()
export class OutofstockService{
    /* private _url: string = GlobalVariable._apiUrl + "#" */
    constructor( private _http: Http ){}
    /* getOutofstock(){
        
        return this._http.get(this._url)
            .map((response:Response) => response.json());
    }
    */
}
