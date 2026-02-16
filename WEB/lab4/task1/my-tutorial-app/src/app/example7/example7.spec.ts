import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example7 } from './example7';

describe('Example7', () => {
  let component: Example7;
  let fixture: ComponentFixture<Example7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
