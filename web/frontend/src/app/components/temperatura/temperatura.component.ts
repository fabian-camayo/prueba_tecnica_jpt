import { Component, OnInit } from '@angular/core';
import { Temperatura } from 'src/app/models/temperatura';
import { TemperaturaService } from "../../services/temperatura.service";

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css'],
  providers: [TemperaturaService]
})
export class TemperaturaComponent implements OnInit {
  list_temperatura: Temperatura[] = [];
  currentIndex = -1;
  page = 1;
  count = 0;
  pageSize = 10;

  constructor(public temperaturaService: TemperaturaService) { }

  ngOnInit(): void {
    this.getTemperatura();
  }
  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};

    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
  getTemperatura() {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.temperaturaService.getTemperatura(params).subscribe(
      response => {
        const { Temperatura, totalItems } = response;
        this.list_temperatura = Temperatura;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.getTemperatura();
  }

}

