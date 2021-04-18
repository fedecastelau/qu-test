import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuTableComponent } from './qu-table.component';

describe('QuTableComponent', () => {
  let component: QuTableComponent;
  let fixture: ComponentFixture<QuTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
