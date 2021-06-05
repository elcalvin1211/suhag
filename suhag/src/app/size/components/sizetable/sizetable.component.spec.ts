import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizetableComponent } from './sizetable.component';

describe('SizetableComponent', () => {
  let component: SizetableComponent;
  let fixture: ComponentFixture<SizetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
