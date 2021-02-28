import { PostModel } from './../post-model';
import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css'],
})
export class VoteButtonComponent implements OnInit {
  @Input() post!: PostModel;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  upvoteColor = 'blue';
  downvoteColor = 'red';

  constructor() {}

  ngOnInit(): void {}

  upvotePost() {}
  downvotePost() {}
}
