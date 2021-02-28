import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCreatePost() {
    this.router.navigateByUrl('/create-post');
  }
  goToCreateSubuglyglah() {
    this.router.navigateByUrl('/create-subuglyglah');
  }
}
