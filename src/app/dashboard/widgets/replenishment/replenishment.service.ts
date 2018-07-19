import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVariable } from '../../../globals';

@Injectable()
export class ReplenishmentService{


    private _url: string = GlobalVariable._apiUrl2 + "/posts"
    constructor( private _http: Http ){}
    
    getReplenishment(){
        return this._http.get(this._url)
            .map((response:Response) => response.json());
    }
    
}

