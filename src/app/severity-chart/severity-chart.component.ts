import { Component, OnInit } from '@angular/core';
import { ChartOptions, ConditionSeverity } from '../model';
import { mockedData } from '../mockedData';

@Component({
  selector: 'app-severity-chart',
  templateUrl: './severity-chart.component.html',
  styleUrls: ['./severity-chart.component.sass']
})
export class SeverityChartComponent implements OnInit {
  chartOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnInit(): void {
    const severityData = mockedData.facets['condition-severity'];
    const data = severityData.map((obj: ConditionSeverity) => obj.count);
    const categories = severityData.map((obj: ConditionSeverity) => obj.key);

    this.chartOptions = {
      series: [
        {
          name: 'Severity',
          data
        }
      ],
      chart: {
        height: 350,
        width: 700,
        type: 'line'
      },
      title: {
        text: 'Severity Chart'
      },
      xaxis: {
        categories
      },
      stroke: {
        curve: 'smooth'
      }
    };
  }

}
