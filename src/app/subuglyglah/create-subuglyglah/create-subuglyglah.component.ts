import { throwError } from 'rxjs';
import { SubuglyglahService } from './../subuglyglah.service';
import { Router } from '@angular/router';
import { SubuglyglahModel } from './../subuglyglah-response';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-subuglyglah',
  templateUrl: './create-subuglyglah.component.html',
  styleUrls: ['./create-subuglyglah.component.css'],
})
export class CreateSubuglyglahComponent implements OnInit {
  createSubuglyglahForm: FormGroup;
  subuglyglahModel: SubuglyglahModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(
    private router: Router,
    private subuglyglahService: SubuglyglahService
  ) {
    this.createSubuglyglahForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.subuglyglahModel = {
      name: '',
      description: '',
    };
  }

  ngOnInit(): void {}

  discard() {
    this.router.navigateByUrl('/');
  }

  createSubuglyglah() {
    this.subuglyglahModel.name = this.createSubuglyglahForm.get('title')?.value;
    this.subuglyglahModel.description = this.createSubuglyglahForm.get(
      'description'
    )?.value;
    this.subuglyglahService.createSubuglyglah(this.subuglyglahModel).subscribe(
      (data) => {
        this.router.navigateByUrl('/list-subuglyglah');
      },
      (error) => {
        throwError(error);
      }
    );
  }
}
