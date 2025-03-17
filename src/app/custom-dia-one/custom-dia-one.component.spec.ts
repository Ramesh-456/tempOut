import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDiaOneComponent } from './custom-dia-one.component';

describe('CustomDiaOneComponent', () => {
  let component: CustomDiaOneComponent;
  let fixture: ComponentFixture<CustomDiaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDiaOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomDiaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
