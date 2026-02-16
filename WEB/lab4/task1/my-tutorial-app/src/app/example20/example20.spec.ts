import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example20 } from './example20';

describe('Example20', () => {
  let component: Example20;
  let fixture: ComponentFixture<Example20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example20]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example20);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
