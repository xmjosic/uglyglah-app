import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentPayload } from './comment-payload';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiCommentUrl = environment.apiBaseUrl + '/api/v1/comments';

  constructor(private http: HttpClient) {}

  postComment(commentPayload: CommentPayload): Observable<any> {
    return this.http.post<any>(`${this.apiCommentUrl}/`, commentPayload);
  }

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    return this.http.get<CommentPayload[]>(
      `${this.apiCommentUrl}/by-post/` + postId
    );
  }

  getAllCommentsByUser(name: string) {
    return this.http.get<CommentPayload[]>(
      `${this.apiCommentUrl}/by-user/` + name
    );
  }
}
