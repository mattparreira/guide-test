import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class FinanceService {

  url = 'https://cors-anywhere.herokuapp.com/https://query2.finance.yahoo.com/v8/finance/chart/PETR4.SA';

  constructor(
    private http: HttpClient
  ) {
  }

  getYahooFinanceData(){
    return this.http.get(this.url, {headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      })})
  }
}
