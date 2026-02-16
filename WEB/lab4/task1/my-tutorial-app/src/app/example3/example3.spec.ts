import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example3 } from './example3';

describe('Example3', () => {
  let component: Example3;
  let fixture: ComponentFixture<Example3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
