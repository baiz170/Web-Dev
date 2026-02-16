import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example23 } from './example23';

describe('Example23', () => {
  let component: Example23;
  let fixture: ComponentFixture<Example23>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example23]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example23);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
