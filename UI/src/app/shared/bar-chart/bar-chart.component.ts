import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartService } from 'src/app/core/services/chart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(
    private chartService: ChartService
  ) { }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Cards', 'Retail Loans', 'Deposits', 'Investment'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [1, 1, 1, 1], label: 'Chart' }
  ];


  ngOnInit() {
    this.updateChart();
  }

  updateChart() {
    this.chartService.get().subscribe(data => {
      this.barChartData = [
        { data: [data.cards, data.retailLoans, data.deposits, data.investment], label: 'Chart' }
      ];
    });
  }


}
