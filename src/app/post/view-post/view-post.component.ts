import { CommentService } from './../../comment/comment.service';
import { CommentPayload } from './../../comment/comment-payload';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './../../shared/post.service';
import { PostModel } from './../../shared/post-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'],
})
export class ViewPostComponent implements OnInit {
  postId: number;
  post: PostModel = new PostModel();
  commentForm: FormGroup;
  commentPayload: CommentPayload;
  comments: CommentPayload[] = [];

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private commentService: CommentService,
    private router: Router
  ) {
    this.postId = this.activatedRoute.snapshot.params.id;

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required),
    });
    this.commentPayload = {
      text: '',
      postId: this.postId,
    };
  }

  ngOnInit(): void {
    this.getPostById();
    this.getCommentsForPost();
  }

  postComment() {
    this.commentPayload.text = this.commentForm.get('text')?.value;
    this.commentService.postComment(this.commentPayload).subscribe(
      (data) => {
        this.commentForm.get('text')?.setValue('');
        this.getCommentsForPost();
      },
      (error) => {
        throwError(error);
      }
    );
  }

  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postId).subscribe(
      (data) => {
        this.comments = data;
      },
      (error) => {
        throwError(error);
      }
    );
  }

  private getPostById() {
    this.postService.getPost(this.postId).subscribe(
      (data) => {
        this.post = data;
      },
      (error) => {
        throwError(error);
      }
    );
  }
}
