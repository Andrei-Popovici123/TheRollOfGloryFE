import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestInfoPageComponent } from './contest-info-page.component';

describe('ContestInfoPageComponent', () => {
  let component: ContestInfoPageComponent;
  let fixture: ComponentFixture<ContestInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContestInfoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContestInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
