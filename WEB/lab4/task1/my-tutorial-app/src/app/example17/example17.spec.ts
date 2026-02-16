import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example17 } from './example17';

describe('Example17', () => {
  let component: Example17;
  let fixture: ComponentFixture<Example17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example17]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example17);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
