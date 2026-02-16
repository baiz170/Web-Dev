import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example16 } from './example16';

describe('Example16', () => {
  let component: Example16;
  let fixture: ComponentFixture<Example16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example16]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example16);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
