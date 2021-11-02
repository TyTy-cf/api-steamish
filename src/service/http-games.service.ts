import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiPlatformResponse} from "../models/interface/i-api-platform-response";
import {Games} from "../models/interface/games";

@Injectable({
  providedIn: 'root'
})
export class HttpGamesService {

  defaultUrl: string = 'https://steam-ish.test-02.drosalys.net/api/games';
  commentsUrl: string = 'https://steam-ish.test-02.drosalys.net/api/comments?game=/api/games/6';

  constructor(private httpClient: HttpClient) { }

  getGames(): Observable<IApiPlatformResponse<Games>> {
    return this.httpClient.get<IApiPlatformResponse<Games>>(this.defaultUrl);
  }

  getGamesBis(): Observable<any> {
    return this.httpClient.get(this.commentsUrl);
  }
}
