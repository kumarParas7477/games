import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private _http: HttpClient) { }

  public getGameData(): Observable<any[]> {
    const headers = new HttpHeaders({ 'content-Type': 'application/json' });

    return this._http.get<any[]>("http://starlord.hackerearth.com/gamesarena");
  }
}
