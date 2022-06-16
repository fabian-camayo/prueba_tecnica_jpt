import { Component, OnInit } from '@angular/core';
import { Nivel } from 'src/app/models/nivel';
import { NivelService } from "../../services/nivel.service";

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.css'],
  providers: [NivelService]
})
export class NivelComponent implements OnInit {
  list_nivel: Nivel[] = [];
  currentIndex = -1;
  page = 1;
  count = 0;
  pageSize = 10;


  constructor(public nivelService: NivelService) { }

  ngOnInit(): void {
    this.getNivel();
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
  getNivel() {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.nivelService.getNivel(params).subscribe(
      response => {
        const { Nivel, totalItems } = response;
        this.list_nivel = Nivel;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
  handlePageChangeNivel(event: number): void {
    this.page = event;
    this.getNivel();
  }

}
