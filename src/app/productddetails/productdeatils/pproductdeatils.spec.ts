import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pproductdeatils } from './pproductdeatils';

describe('Pproductdeatils', () => {
  let component: Pproductdeatils;
  let fixture: ComponentFixture<Pproductdeatils>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pproductdeatils]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pproductdeatils);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
