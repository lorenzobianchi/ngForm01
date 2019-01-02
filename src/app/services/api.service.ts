import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postEndPoint = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  fetchPost(): Observable<Object> {
    this.http.get(this.postEndPoint)
  }
}
