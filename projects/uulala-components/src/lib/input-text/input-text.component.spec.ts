import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UulInputTextComponent } from './uul-input-text.component';

describe('UulInputTextComponent', () => {
  let component: UulInputTextComponent;
  let fixture: ComponentFixture<UulInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UulInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UulInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
