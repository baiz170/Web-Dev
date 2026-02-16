import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example6 } from './example6';

describe('Example6', () => {
  let component: Example6;
  let fixture: ComponentFixture<Example6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
