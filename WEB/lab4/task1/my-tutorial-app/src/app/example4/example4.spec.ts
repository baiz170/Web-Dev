import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example4 } from './example4';

describe('Example4', () => {
  let component: Example4;
  let fixture: ComponentFixture<Example4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
