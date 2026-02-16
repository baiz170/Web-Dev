import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example9 } from './example9';

describe('Example9', () => {
  let component: Example9;
  let fixture: ComponentFixture<Example9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
