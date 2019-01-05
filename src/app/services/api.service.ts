import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export interface Post {
  id: number;
  author: string;
  title: string;
  data: {
    numbers?: number[];
    names?: string[];
  };
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postEndPoint = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<any> {
    return this.http.get(this.postEndPoint)
  }

  addNewPost(newPost: any) {
    return this.http.post(this.postEndPoint, newPost)
  }

}
