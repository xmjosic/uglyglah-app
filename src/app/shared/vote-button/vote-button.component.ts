import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PostService } from './../post.service';
import { AuthService } from './../../auth/shared/auth.service';
import { VoteService } from './../vote.service';
import { VotePayload } from './vote-payload';
import { PostModel } from './../post-model';
import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { VoteType } from './vote-type';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css'],
})
export class VoteButtonComponent implements OnInit {
  @Input() post!: PostModel;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  votePayload!: VotePayload;
  upvoteColor!: string;
  downvoteColor!: string;

  constructor(
    private voteService: VoteService,
    private authService: AuthService,
    private postService: PostService,
    private toastr: ToastrService
  ) {
    this.votePayload;
  }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  updateVoteDetails() {
    this.postService.getPost(this.post.id).subscribe((post) => {
      this.post = post;
    });
  }

  upvotePost() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
    this.downvoteColor = '';
  }

  downvotePost() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.upvoteColor = '';
  }

  private vote() {
    this.votePayload.postId = this.post.id;
    this.voteService.vote(this.votePayload).subscribe(
      () => {
        this.updateVoteDetails();
      },
      (error) => {
        this.toastr.error(error.error.message);
        throwError(error);
      }
    );
  }
}
