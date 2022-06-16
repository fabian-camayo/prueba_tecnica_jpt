import { Component, OnInit } from '@angular/core';
import { Nivel } from 'src/app/models/nivel';
import { NivelService } from "../../../services/nivel.service";

@Component({
  selector: 'app-nivel-all',
  templateUrl: './nivel-all.component.html',
  styleUrls: ['./nivel-all.component.css']
})
export class NivelAllComponent implements OnInit {
  list_nivel: Nivel[] = [];

  constructor(public nivelService: NivelService) { }

  ngOnInit(): void {
    this.getNivelAll();
  }
  getNivelAll() {
    this.nivelService.getNivelAll().subscribe(
      response => {
        this.list_nivel = response;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}
