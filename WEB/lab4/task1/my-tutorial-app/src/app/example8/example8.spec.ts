import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example8 } from './example8';

describe('Example8', () => {
  let component: Example8;
  let fixture: ComponentFixture<Example8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
