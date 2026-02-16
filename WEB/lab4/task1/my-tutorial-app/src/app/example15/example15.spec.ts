import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example15 } from './example15';

describe('Example15', () => {
  let component: Example15;
  let fixture: ComponentFixture<Example15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example15]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example15);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
