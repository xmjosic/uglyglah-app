import { SubuglyglahModel } from './../../subuglyglah/subuglyglah-response';
import { SubuglyglahService } from './../../subuglyglah/subuglyglah.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subuglyglah-side-bar',
  templateUrl: './subuglyglah-side-bar.component.html',
  styleUrls: ['./subuglyglah-side-bar.component.css'],
})
export class SubuglyglahSideBarComponent implements OnInit {
  subuglyglahs!: Array<SubuglyglahModel>;
  displayViewAll: boolean = false;

  constructor(private subuglyglahService: SubuglyglahService) {
    this.subuglyglahService.getAllSubuglyglahs().subscribe((data) => {
      if (data.length >= 4) {
        this.subuglyglahs = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subuglyglahs = data;
      }
    });
  }

  ngOnInit(): void {}
}
