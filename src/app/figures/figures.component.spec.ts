import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguresComponent } from './figures.component';

describe('FiguresComponent', () => {
  let component: FiguresComponent;
  let fixture: ComponentFixture<FiguresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FiguresComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
