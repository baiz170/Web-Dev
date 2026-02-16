import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example11 } from './example11';

describe('Example11', () => {
  let component: Example11;
  let fixture: ComponentFixture<Example11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
