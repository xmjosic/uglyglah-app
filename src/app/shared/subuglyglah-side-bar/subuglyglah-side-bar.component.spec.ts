import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubuglyglahSideBarComponent } from './subuglyglah-side-bar.component';

describe('SubuglyglahSideBarComponent', () => {
  let component: SubuglyglahSideBarComponent;
  let fixture: ComponentFixture<SubuglyglahSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubuglyglahSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubuglyglahSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
