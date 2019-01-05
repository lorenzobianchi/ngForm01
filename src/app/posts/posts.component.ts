import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$;
  items: string[] = [];
  observable: any = Observable.create((observer:any) => {
    try {
      observer.next('hei guys!!!');
      observer.next('how are u?');
      setInterval(() => {
        observer.next('I am good');
      }, 2000)
    } catch(err) {
        observer.error(err)
    }
  });

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.posts$ = this.apiService.fetchPosts();
    const observer = this.observable.subscribe(
      (x:any)=> this.addItem(x),
      (error:any) => this.addItem(error),
      () => this.addItem('completed')
    )

    setTimeout(() => {
      observer.unsubscribe();
    }, 6001)
  }

  goNewPost() {

    this.router.navigate(['posts/add'])
    // this.apiService.addNewPost().subscribe(
    // (data: any) => {
    //   console.log(data);
    // }
  }

  addItem(x:string) {
    this.items.push(x)
  }
}
