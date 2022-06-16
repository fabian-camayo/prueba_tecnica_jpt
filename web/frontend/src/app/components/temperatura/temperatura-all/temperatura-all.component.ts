import { Component, OnInit } from '@angular/core';
import { Temperatura } from 'src/app/models/temperatura';
import { TemperaturaService } from "../../../services/temperatura.service";

@Component({
  selector: 'app-temperatura-all',
  templateUrl: './temperatura-all.component.html',
  styleUrls: ['./temperatura-all.component.css']
})
export class TemperaturaAllComponent implements OnInit {
  list_temperatura: Temperatura[] = [];

  constructor(public temperaturaService: TemperaturaService) { }

  ngOnInit(): void {
    this.getTemperaturaAll();
  }
  getTemperaturaAll() {
    this.temperaturaService.getTemperaturaAll().subscribe(
      response => {
        this.list_temperatura = response;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}
