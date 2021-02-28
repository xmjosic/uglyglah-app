import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from './post-model';
import { environment } from 'src/environments/environment';
import { CreatePostPayload } from '../post/create-post/create-post.payload';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiPostUrl = environment.apiBaseUrl + '/api/v1/posts/';

  constructor(private http: HttpClient) {}

  //TODO: check post model array
  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>(`${this.apiPostUrl}`);
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post(`${this.apiPostUrl}`, postPayload);
  }
}
