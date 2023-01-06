import {Component, OnInit} from '@angular/core';
import {FinanceService} from '../services/finance.service';
import {tap} from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chartData: any;
  chartOptions: any;

  constructor(
    private financeService: FinanceService
  ) {
  }

  ngOnInit(): void {
    this.financeService.getYahooFinanceData().pipe(tap(data => {
      this.buildOptions();
      this.buildChart(data);
    })).subscribe();
  }

  private buildChart(data: any) {
    let labels =  [];
    let values = [];
    let countDay = 1;
    for (let i = 30; i >= 1; i--) {
      const label = countDay + '°';
      let value = data.chart.result[0].indicators.quote[0].open[
      data.chart.result[0].indicators.quote[0].open.length - i
        ];

      if (value == null) {
        value = 0
      }

      value = value.toFixed(2)

      labels.push(label)
      values.push(value)
      countDay++
    }

    this.chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Valor do pregão',
          data: values,
          fill: false,
          borderColor: '#42A5F5',
          tension: .4
        },
      ]
    }
  }

  private buildOptions () {
      this.chartOptions = {
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          },
          y: {
            ticks: {
              color: '#495057'
            },
            grid: {
              color: '#ebedef'
            }
          }
        }
      };
  }
}
