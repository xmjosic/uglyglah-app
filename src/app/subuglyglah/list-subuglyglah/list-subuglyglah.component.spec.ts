import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubuglyglahComponent } from './list-subuglyglah.component';

describe('ListSubuglyglahComponent', () => {
  let component: ListSubuglyglahComponent;
  let fixture: ComponentFixture<ListSubuglyglahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubuglyglahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubuglyglahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
