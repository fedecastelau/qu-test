import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuContentComponent } from './qu-content.component';

describe('QuContentComponent', () => {
  let component: QuContentComponent;
  let fixture: ComponentFixture<QuContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
