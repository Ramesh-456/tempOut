import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDiaTwoComponent } from './custom-dia-two.component';

describe('CustomDiaTwoComponent', () => {
  let component: CustomDiaTwoComponent;
  let fixture: ComponentFixture<CustomDiaTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDiaTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomDiaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
