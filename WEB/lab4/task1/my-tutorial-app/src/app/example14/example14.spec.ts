import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example14 } from './example14';

describe('Example14', () => {
  let component: Example14;
  let fixture: ComponentFixture<Example14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example14]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
