import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlDaigramComponent } from './UmlDaigramComponent';

describe('UmlDaigramComponent', () => {
  let component: UmlDaigramComponent;
  let fixture: ComponentFixture<UmlDaigramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UmlDaigramComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UmlDaigramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
