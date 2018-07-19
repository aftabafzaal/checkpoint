import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { GlobalVariable } from '../../globals';

@Injectable()
export class ActivitiesPageService {
  private _url: string = GlobalVariable._apiUrl + "/axis/api/v1.0/reports/stores/00FFFFFFF111111000100014/activities/kpi"
  constructor(private _http: Http) { }
  getActivitiesData() {

    return this._http.get(this._url)
      .map((response: Response) => response.json());
  }

}
