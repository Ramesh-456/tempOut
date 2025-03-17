import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueAccComponent } from './value-acc.component';

describe('ValueAccComponent', () => {
  let component: ValueAccComponent;
  let fixture: ComponentFixture<ValueAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueAccComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValueAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
