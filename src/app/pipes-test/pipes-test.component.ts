import { Component, OnInit } from '@angular/core';
import { registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de'
import {Data} from "@angular/router";
registerLocaleData(localeDe, 'de');

@Component({
  selector: 'app-pipes-test',
  template: `
    <div>uppercase: {{str | uppercase}}</div>
    <div>lowercase: {{str | lowercase}}</div>
    <div>number: {{num | number}}</div>
    <div>percent: {{num | percent}}</div>
    <div>currency: {{num | currency}}</div>
    <div>{{str2 | slice:25}}</div>
    <div>{{str2 | slice:0:6}}</div>
    <div>{{str2 | slice:-8}}</div>
    <div>{{pi | number:'3.5-5'}}</div>
    <div>{{pi | number:'2.1-2'}}</div>
    <div>{{pi | number:'3.5-5':'de'}}</div>

    <div>{{money | currency:'USD'}}</div>
    <div>{{money | currency:'UAH'}}</div>
    <div>{{money | currency:'UAH':'code'}}</div>
    <div>{{money | currency:'UAH':'symbol-narrow'}}</div>
    <div>{{money | currency:'UAH':'symbol':'1.1-1'}}</div>
    <div>{{money | currency:'UAH':'symbol-narrow':'1.1-1'}}</div>
    <div>{{money | currency:'UAH':'Грн.'}}</div>

    <div>{{a | percent}}</div>
    <div>{{b | percent}}</div>
    <div>{{c | percent}}</div>
    <div>{{a | percent:'3.3-5'}}</div>
    <div>{{a | percent:'3.3-5':'de'}}</div>

    <div>From object: {{dataOblect | date}}</div>
    <div>From string: {{dateString | date}}</div>
    <div>From number: {{datenumber | date}}</div>

    <div>ShortDate: {{datenumber | date:'shortDate'}}</div>
    <div>MediumDate: {{datenumber | date:'mediumDate'}}</div>
    <div>LongDate: {{datenumber | date:'longDate'}}</div>

    <div>{{str2 | slice:6:11 | uppercase}}</div>


    `,
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent implements OnInit {
  str = 'Hello world';
  str2 = 'London is the capital of Great Britain';
  num = 0.14;
  pi = 3.1415;
  money = 340;
  a = 0.14;
  b = 0.2;
  c = 0.259;

  dataOblect: Date = new Date(2022,9,14);
  dateString = '2022-09-14T00:00:00.000Z';
  datenumber = 1722156800000;

  constructor() { }

  ngOnInit(): void {
  }

}
