import {Component, OnInit, ViewChild} from '@angular/core';
import {ListModel} from './list.model';
import {FinanceService} from '../services/finance.service';
import {tap} from 'rxjs';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html'
})
export class ListComponent implements OnInit{
  @ViewChild('dt') dt: Table | undefined;
  financeList: ListModel[] = [];

  showList = false;

  constructor(
    private financeService: FinanceService
  ) {
  }

  ngOnInit(): void {
    this.financeService.getYahooFinanceData().pipe(tap(data => {
      this.buildList(data)
    })).subscribe();
  }

  private buildList(data: any) {
    let id = 1;
    for (let i = 30; i >= 1; i--) {
      const date = new Date(data.chart.result[0].timestamp[data.chart.result[0].timestamp.length - i]);
      let value = data.chart.result[0].indicators.quote[0].open[
      data.chart.result[0].indicators.quote[0].open.length - i
        ];

      if (value == null) {
        value = 0
      }

      value = value.toFixed(2)

      let firstDateVariation = 0;
      if (i < 30) {
        firstDateVariation = ((value - this.financeList[0].value) / this.financeList[0].value) * 100
      }

      let lastDateVariation = 0;
      if (i < 30) {
        lastDateVariation = ((value - this.financeList[this.financeList.length - 1].value)
          / this.financeList[this.financeList.length - 1].value) * 100
      }

      const item = {
        id: id,
        value: value,
        date: date.getDate() + '/' + (date.getMonth()+1) + '/' +
          date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() +
          ' ' + date.getMilliseconds(),
        lastDateVariation: i === 30 ? '-' : lastDateVariation.toFixed(3) + '%',
        firstDateVariation: i === 30 ? '-' : firstDateVariation.toFixed(3) + '%'
      }

      this.financeList.push(item)
      id++
    }

    this.showList = true;
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
