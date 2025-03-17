import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalImplComponent } from './signal-impl.component';

describe('SignalImplComponent', () => {
  let component: SignalImplComponent;
  let fixture: ComponentFixture<SignalImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalImplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
