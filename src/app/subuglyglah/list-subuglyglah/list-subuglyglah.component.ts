import { SubuglyglahModel } from './../subuglyglah-response';
import { throwError } from 'rxjs';
import { SubuglyglahService } from './../subuglyglah.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-subuglyglah',
  templateUrl: './list-subuglyglah.component.html',
  styleUrls: ['./list-subuglyglah.component.css'],
})
export class ListSubuglyglahComponent implements OnInit {
  subuglyglahs: Array<SubuglyglahModel> = [];

  constructor(private subuglyglahService: SubuglyglahService) {}

  ngOnInit(): void {
    this.subuglyglahService.getAllSubuglyglahs().subscribe(
      (data) => {
        this.subuglyglahs = data;
      },
      (error) => {
        throwError(error);
      }
    );
  }
}
