import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example13 } from './example13';

describe('Example13', () => {
  let component: Example13;
  let fixture: ComponentFixture<Example13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Example13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Example13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
