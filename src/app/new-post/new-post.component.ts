import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  data$;
  currentId: number;

  ngOnInit() {
    this.apiService.fetchPosts()
      .subscribe(d => {
        let data = d
        this.data$ = data;
        this.currentId = Math.max(...data.map(x => x.id)) + 1;
        console.log('data =>', this.data$);
        console.log('currentId =>', this.currentId);
    });

  }

  onSubmit(formValue) {
    let newPost = {
        "id": this.currentId,
        "title": formValue.title,
        "author": formValue.author,
        "data": {
            "numbers": [
                1,
                2,
                4,
                8,
                11,
                0.4
            ],
            "names": [
                "John",
                "Sara",
                "Ed",
                "Jack"
            ],
            "body": formValue.body
        }
      };
      this.apiService.addNewPost(newPost).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
  }
}
