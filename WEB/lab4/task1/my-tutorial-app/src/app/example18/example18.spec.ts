import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example18 } from './example18';

describe('Example18', () => {
  let component: Example18;
  let fixture: ComponentFixture<Example18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example18]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
