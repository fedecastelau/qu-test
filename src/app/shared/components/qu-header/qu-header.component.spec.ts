import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuHeaderComponent } from './qu-header.component';

describe('QuHeaderComponent', () => {
  let component: QuHeaderComponent;
  let fixture: ComponentFixture<QuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
