import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UulalaComponentsComponent } from './uulala-components.component';

describe('UulalaComponentsComponent', () => {
  let component: UulalaComponentsComponent;
  let fixture: ComponentFixture<UulalaComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UulalaComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UulalaComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
