import { PostModel } from './../post-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css'],
})
export class VoteButtonComponent implements OnInit {
  @Input() post!: PostModel;

  constructor() {}

  ngOnInit(): void {}
}
