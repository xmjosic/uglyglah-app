import { Router } from '@angular/router';
import { PostService } from './../post.service';
import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../post-model';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css'],
})
export class PostTileComponent implements OnInit {
  faComments = faComments;
  @Input() posts: PostModel[] | undefined;

  posts$: Array<PostModel> = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPost(id: number): void {
    this.router.navigateByUrl('view-post/' + id);
  }
}
