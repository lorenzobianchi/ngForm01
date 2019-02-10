import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post$ = new BehaviorSubject({title: 'Loading...', data: {body: ''}})

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.route.params.pipe(
      map((p: any) => p.id),
      switchMap(id => this.http.get('http://localhost:3000/posts/' + id)),
      // startWith({title: 'Loading...', data: {body: ''}})
    ).subscribe(this.post$);
  }

  ngOnInit() {
  }

}
