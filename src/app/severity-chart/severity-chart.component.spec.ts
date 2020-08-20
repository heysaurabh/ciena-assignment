import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverityChartComponent } from './severity-chart.component';

describe('SeverityChartComponent', () => {
  let component: SeverityChartComponent;
  let fixture: ComponentFixture<SeverityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverityChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
