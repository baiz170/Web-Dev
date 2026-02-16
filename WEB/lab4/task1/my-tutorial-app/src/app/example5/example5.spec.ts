import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example5 } from './example5';

describe('Example5', () => {
  let component: Example5;
  let fixture: ComponentFixture<Example5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
