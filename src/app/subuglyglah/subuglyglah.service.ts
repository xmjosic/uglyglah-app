import { Observable } from 'rxjs';
import { SubuglyglahModel } from './subuglyglah-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubuglyglahService {
  private apiSubuglyglahUrl = environment.apiBaseUrl + '/api/v1/subuglyglah/';

  constructor(private http: HttpClient) {}

  getAllSubuglyglahs(): Observable<Array<SubuglyglahModel>> {
    return this.http.get<Array<SubuglyglahModel>>(`${this.apiSubuglyglahUrl}`);
  }
}
