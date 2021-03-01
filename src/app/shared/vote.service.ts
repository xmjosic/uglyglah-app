import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VotePayload } from './vote-button/vote-payload';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  private apiVoteUrl = environment.apiBaseUrl + '/api/v1/votes';

  constructor(private http: HttpClient) {}

  vote(votePayload: VotePayload): Observable<any> {
    return this.http.post(`${this.apiVoteUrl}/`, votePayload);
  }
}
