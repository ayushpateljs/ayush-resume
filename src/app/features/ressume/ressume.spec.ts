import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ressume } from './ressume';

describe('Ressume', () => {
  let component: Ressume;
  let fixture: ComponentFixture<Ressume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ressume],
    }).compileComponents();

    fixture = TestBed.createComponent(Ressume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
