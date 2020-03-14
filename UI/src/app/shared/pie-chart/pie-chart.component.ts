import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { ChartService } from 'src/app/core/services/chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(
    private chartService: ChartService
  ) { }


  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Deposits'], ['Investment'], ['Retail Loans'], 'Cards'];
  public pieChartData: SingleDataSet = [1, 1, 1, 1];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  ngOnInit() {
    this.updateChart();
  }

  updateChart() {
    this.chartService.get().subscribe(data => {
        this.pieChartData = [data.deposits, data.investment, data.retailLoans, data.cards];
    });
  }

}
