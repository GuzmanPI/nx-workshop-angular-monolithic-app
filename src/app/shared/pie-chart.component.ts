import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  template: `<div style="display: block">
    <canvas
      baseChart
      [data]="pieChartData"
      [labels]="pieChartLabels"
      [chartType]="pieChartType"
      [options]="pieChartOptions"
      [colors]="pieChartColors"
    >
    </canvas>
  </div>`,
})
export class PieChartComponent implements OnInit {
  @Input() mySales: number[];
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
  };
  pieChartLabels: Label[] = [
    'Mayo 2019',
    'Junio 2019',
    'Julio 2019',
    'Agosto 2019',
    'Septiembre 2019',
    'Octubre 2019',
    'Diciembre 2019',
    'Enero 2020',
    'Febrero 2020',
    'Marzo 2020',
    'Abril 2020',
    'Mayo 2020',
  ];
  pieChartData: number[];
  pieChartType: ChartType = 'pie';
  pieChartColors = [
    {
      backgroundColor: [
        '#ff4d4f',
        '#cf1322',
        '#ffa940',
        '#d46b08',
        '#73d13d',
        '#389e0d',
        '#36cfc9',
        '#08979c',
        '#40a9ff',
        '#096dd9',
        '#9254de',
        '#531dab',
      ],
    },
  ];

  ngOnInit(): void {
    this.pieChartData = this.mySales;
  }
}
