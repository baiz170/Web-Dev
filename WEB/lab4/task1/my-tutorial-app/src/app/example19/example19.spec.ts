import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example19 } from './example19';

describe('Example19', () => {
  let component: Example19;
  let fixture: ComponentFixture<Example19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example19]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example19);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
