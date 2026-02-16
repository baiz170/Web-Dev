import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example22 } from './example22';

describe('Example22', () => {
  let component: Example22;
  let fixture: ComponentFixture<Example22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example22]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example22);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
