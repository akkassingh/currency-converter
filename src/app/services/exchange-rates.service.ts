import { ExchangeRatesResponse } from './payloads/exchange-rates-response';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(
    private HttpClient: HttpClient) { }

    getRates(base: String): Observable<ExchangeRatesResponse>{
      return this.HttpClient.get<ExchangeRatesResponse>(`https://api.exchangeratesapi.io/latest?base=${base}`)
    }
}