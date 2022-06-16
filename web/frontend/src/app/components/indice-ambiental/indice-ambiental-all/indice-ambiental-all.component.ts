import { Component, OnInit } from '@angular/core';
import { Observable, interval,Subscription  } from 'rxjs';
import { IndiceAmbiental } from 'src/app/models/indiceAmbiental';
import { IndiceAmbientalService } from "../../../services/indice-ambiental.service";


@Component({
  selector: 'app-indice-ambiental-all',
  templateUrl: './indice-ambiental-all.component.html',
  styleUrls: ['./indice-ambiental-all.component.css'],
  providers: [IndiceAmbientalService]
})
export class IndiceAmbientalAllComponent implements OnInit {
  list_indiceAmbiental: IndiceAmbiental[] = [];
  currentIndex= -1;
  page = 1;
  count = 0;
  pageSize = 10;

  private updateSubscription: Subscription;
  constructor(public indiceAmbientalService: IndiceAmbientalService) { }

  ngOnInit(): void {
    this.updateSubscription = interval(2000).subscribe(
      (val) => { this.getIndiceAmbiental();
      }) 
  }
  ngOnDestroy():void{
    this.updateSubscription.unsubscribe();
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
  getIndiceAmbiental() {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.indiceAmbientalService.getIndiceAmbiental(params).subscribe(
      response => {
        const { IndiceAmbiental, totalItems } = response;
        this.list_indiceAmbiental = IndiceAmbiental;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.getIndiceAmbiental();
  }

}
