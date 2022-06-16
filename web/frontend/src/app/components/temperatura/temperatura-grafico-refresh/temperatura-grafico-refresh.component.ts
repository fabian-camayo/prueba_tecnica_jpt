import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, interval,Subscription  } from 'rxjs';
import { Temperatura } from 'src/app/models/temperatura';
import { TemperaturaService } from "../../../services/temperatura.service";
import { ScriptLoaderService, getPackageForChart, ChartType } from 'angular-google-charts';
declare var google: any;

@Component({
  selector: 'app-temperatura-grafico-refresh',
  templateUrl: './temperatura-grafico-refresh.component.html',
  styleUrls: ['./temperatura-grafico-refresh.component.css']
})

export class TemperaturaGraficoRefreshComponent implements OnInit {

  private updateSubscription: Subscription;
  private readonly chartPackage = getPackageForChart(ChartType.PieChart);
  @ViewChild('divPieChartTemperatura') divPieChartTemperatura: ElementRef;
  constructor(private loaderService: ScriptLoaderService, public temperaturaService: TemperaturaService) {

  }
  ngOnInit(): void {
    this.updateSubscription = interval(4000).subscribe(
      (val) => { this.getTemperaturaAll();
    }) 
  }
  ngOnDestroy():void{
    this.updateSubscription.unsubscribe();
  }
  buildChart(list_temperatura: Temperatura[]) {
    var func = (chart: any) => {
      var data = new google.visualization.DataTable;
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');

      var list_valores_temperatura: any = [];
      list_temperatura.forEach(item => {
        list_valores_temperatura.push(parseFloat(item.ENG.replace(',', '.')))
      });
      list_valores_temperatura = list_valores_temperatura.sort();
      let data_grafica: any = [];
      let temp_list_temperatura: any = [];
      let fin = list_valores_temperatura[0] + 5;
      temp_list_temperatura.push(list_valores_temperatura[0]);
      for (let i = 1; i <= list_valores_temperatura.length - 1; i++) {
        if ((list_valores_temperatura[i] >= (fin - 5)) && (list_valores_temperatura[i] < fin)) {
          temp_list_temperatura.push(list_valores_temperatura[i]);
        } else {
          
          data_grafica.push([temp_list_temperatura[0] + " - " + temp_list_temperatura[temp_list_temperatura.length - 1], temp_list_temperatura.length]);
          temp_list_temperatura = [];
          fin = list_valores_temperatura[i] + 5;
          
          temp_list_temperatura.push(list_valores_temperatura[i]);
          
        }

        if (i == (list_valores_temperatura.length - 1)) {
          
          data_grafica.push([temp_list_temperatura[0] + " - " + temp_list_temperatura[temp_list_temperatura.length - 1], temp_list_temperatura.length]);
        }
      }
      data.addRows(data_grafica);

      var options = {
        title: 'Rangos de Temperatura',
        height: 500,
        legend: {
          alignment: 'center',
          position: 'top'
        }
      };
      chart().draw(data, options);
    }
    var chart = () => new google.visualization.PieChart(this.divPieChartTemperatura.nativeElement);
    var callback = () => func(chart);
    google.charts.setOnLoadCallback(callback);
  }


  getTemperaturaAll() {
    this.temperaturaService.getTemperaturaAll().subscribe(
      response => {
        this.loaderService.loadChartPackages(this.chartPackage).subscribe(() => {
          let list_temperatura = response;
          google.charts.load('current', { packages: ['corechart'] });
          this.buildChart(list_temperatura);
        });
      },
      error => {
        console.log(error);
      });
  }

}
