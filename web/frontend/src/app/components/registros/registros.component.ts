import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  statusView = 'manual';

  constructor() { }

  ngOnInit(): void {

  }
  registrosChangeView(param: any) {
    this.statusView = param;
  }

}
