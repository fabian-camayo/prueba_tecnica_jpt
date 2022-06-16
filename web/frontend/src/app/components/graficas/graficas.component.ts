import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {
  statusView = 'refresh';

  constructor() { }

  ngOnInit(): void {
  }
  graficasChangeView(param: any) {
    this.statusView = param;
  }
}
