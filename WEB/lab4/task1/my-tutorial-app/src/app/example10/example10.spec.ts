import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example10 } from './example10';

describe('Example10', () => {
  let component: Example10;
  let fixture: ComponentFixture<Example10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
