import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockdashComponent } from './stockdash.component';

describe('StockdashComponent', () => {
  let component: StockdashComponent;
  let fixture: ComponentFixture<StockdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
