import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example12 } from './example12';

describe('Example12', () => {
  let component: Example12;
  let fixture: ComponentFixture<Example12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
