import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubuglyglahComponent } from './create-subuglyglah.component';

describe('CreateSubuglyglahComponent', () => {
  let component: CreateSubuglyglahComponent;
  let fixture: ComponentFixture<CreateSubuglyglahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubuglyglahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubuglyglahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
