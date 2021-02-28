import { throwError } from 'rxjs';
import { SubuglyglahService } from './../../subuglyglah/subuglyglah.service';
import { PostService } from './../../shared/post.service';
import { Router } from '@angular/router';
import { CreatePostPayload } from './create-post.payload';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SubuglyglahModel } from 'src/app/subuglyglah/subuglyglah-response';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  createPostForm!: FormGroup;
  postPayload: CreatePostPayload;
  subuglyglahs: Array<SubuglyglahModel> = [];

  constructor(
    private router: Router,
    private postService: PostService,
    private subuglyglahService: SubuglyglahService
  ) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      subuglyglahName: '',
    };
  }

  ngOnInit(): void {
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      subuglyglahName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl(Validators.required),
    });
    this.subuglyglahService.getAllSubuglyglahs().subscribe(
      (data) => {
        this.subuglyglahs = data;
      },
      (error) => {
        throwError(error);
      }
    );
  }

  createPost() {
    this.postPayload.postName = this.createPostForm.get('postName')?.value;
    this.postPayload.description = this.createPostForm.get(
      'description'
    )?.value;
    this.postPayload.subuglyglahName = this.createPostForm.get(
      'subuglyglahName'
    )?.value;
    this.postPayload.url = this.createPostForm.get('url')?.value;

    this.postService.createPost(this.postPayload).subscribe(
      (data) => {
        this.router.navigateByUrl('/');
      },
      (error) => {
        throwError(error);
      }
    );
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }
}
