import { Component, OnInit } from '@angular/core';
import { CurrencyExchangeService } from '../services/exchange-rates.service' 
import { Key } from 'protractor';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  amount = 1;
  from = 'USD';
  to = 'INR';
  rates: {[key: string]: number};

  convert(): number{
    return this.amount * this.rates[this.to];
  }

  loadRates() {
    this.service.getRates(this.from).subscribe(res => this.rates = res.rates);
  }
  getAllCurrencies():
  constructor(
    private service: CurrencyExchangeService) {
      
    }

  ngOnInit(): void {
    this.loadRates();
  }

}
