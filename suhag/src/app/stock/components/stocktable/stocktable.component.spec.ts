import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktableComponent } from './stocktable.component';

describe('StocktableComponent', () => {
  let component: StocktableComponent;
  let fixture: ComponentFixture<StocktableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocktableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
