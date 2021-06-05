import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedashComponent } from './sizedash.component';

describe('SizedashComponent', () => {
  let component: SizedashComponent;
  let fixture: ComponentFixture<SizedashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizedashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
