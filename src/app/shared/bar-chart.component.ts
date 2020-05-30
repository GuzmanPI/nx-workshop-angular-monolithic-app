import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartColor } from 'chart.js';
import { Color, Colors, Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  template: ` <div style="display: block">
    <canvas
      baseChart
      [datasets]="barChartData"
      [labels]="barChartLabels"
      [options]="barChartOptions"
      [colors]="barChartColors"
      [legend]="barChartLegend"
      [chartType]="barChartType"
    >
    </canvas>
  </div>`,
})
export class BarChartComponent implements OnInit {
  @Input() mySales: number[];
  @Input() teamSales: number[];

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  barChartLabels: Label[] = [
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
  barChartType: ChartType = 'bar';
  barChartLegend = true;

  barChartData: ChartDataSets[];

  barChartColors: Color[] = [
    { backgroundColor: '#87e8de', hoverBackgroundColor: '#08979c' },
    { backgroundColor: '#b5f5ec', hoverBackgroundColor: '#13c2c2' },
  ];

  ngOnInit(): void {
    this.barChartData = [
      { data: this.mySales, label: 'My Sales' },
      { data: this.teamSales, label: 'Team Sales' },
    ];
  }
}
