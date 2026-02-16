import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example21 } from './example21';

describe('Example21', () => {
  let component: Example21;
  let fixture: ComponentFixture<Example21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example21]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example21);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
