import { Component, OnInit } from '@angular/core';
import { Humedad } from 'src/app/models/humedad';
import { HumedadService } from "../../services/humedad.service";


@Component({
  selector: 'app-humedad',
  templateUrl: './humedad.component.html',
  styleUrls: ['./humedad.component.css'],
  providers: [HumedadService]
})
export class HumedadComponent implements OnInit {
  list_humedad: Humedad[] = [];
  currentIndex= -1;
  page = 1;
  count = 0;
  pageSize = 10;

  constructor(public humedadService: HumedadService) { }

  ngOnInit(): void {
    this.getHumedad();
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
  getHumedad() {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.humedadService.getHumedad(params).subscribe(
      response => {
        const { Humedad, totalItems } = response;
        this.list_humedad = Humedad;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.getHumedad();
  }

}
