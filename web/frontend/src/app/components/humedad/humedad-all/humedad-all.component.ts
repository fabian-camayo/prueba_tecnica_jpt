import { Component, OnInit } from '@angular/core';
import { Humedad } from 'src/app/models/humedad';
import { HumedadService } from "../../../services/humedad.service";

@Component({
  selector: 'app-humedad-all',
  templateUrl: './humedad-all.component.html',
  styleUrls: ['./humedad-all.component.css']
})
export class HumedadAllComponent implements OnInit {
  list_humedad: Humedad[] = [];

  constructor(public humedadService: HumedadService) { }

  ngOnInit(): void {
    this.getHumedadAll();
  }
  getHumedadAll() {
    this.humedadService.getHumedadAll().subscribe(
      response => {
        this.list_humedad = response;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}
