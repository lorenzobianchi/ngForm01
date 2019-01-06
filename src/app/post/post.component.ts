import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postTitle: string;
  id;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.params.pipe(
      map((p: any) => p.id)
    )
  }

  ngOnInit() {
  }

}
