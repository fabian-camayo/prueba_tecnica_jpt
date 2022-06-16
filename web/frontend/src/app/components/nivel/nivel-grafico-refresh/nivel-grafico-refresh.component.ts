import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, interval,Subscription  } from 'rxjs';
import { Nivel } from 'src/app/models/nivel';
import { NivelService } from "../../../services/nivel.service";
import { ScriptLoaderService, getPackageForChart, ChartType } from 'angular-google-charts';
declare var google: any;

@Component({
  selector: 'app-nivel-grafico-refresh',
  templateUrl: './nivel-grafico-refresh.component.html',
  styleUrls: ['./nivel-grafico-refresh.component.css']
})

export class NivelGraficoRefreshComponent implements OnInit {

  private updateSubscription: Subscription;
  private readonly chartPackage = getPackageForChart(ChartType.PieChart);
  @ViewChild('divPieChartNivel') divPieChartNivel: ElementRef;
  constructor(private loaderService: ScriptLoaderService, public nivelService: NivelService) {

  }
  ngOnInit(): void {
    this.updateSubscription = interval(3000).subscribe(
      (val) => { this.getNivelAll();
    }) 
  }
  ngOnDestroy():void{
    this.updateSubscription.unsubscribe();
  }
  buildChart(list_nivel: Nivel[]) {
    var func = (chart: any) => {
      var data = new google.visualization.DataTable;
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');

      var list_valores_nivel: any = [];
      list_nivel.forEach(item => {
        list_valores_nivel.push(parseFloat(item.ENG.replace(',', '.')))
      });
      list_valores_nivel = list_valores_nivel.sort();
      let data_grafica: any = [];
      let temp_list_nivel: any = [];
      let fin = list_valores_nivel[0] + 5;
      temp_list_nivel.push(list_valores_nivel[0]);
      for (let i = 1; i <= list_valores_nivel.length - 1; i++) {
        if ((list_valores_nivel[i] >= (fin - 5)) && (list_valores_nivel[i] < fin)) {
          temp_list_nivel.push(list_valores_nivel[i]);
        } else {
          
          data_grafica.push([temp_list_nivel[0] + " - " + temp_list_nivel[temp_list_nivel.length - 1], temp_list_nivel.length]);
          temp_list_nivel = [];
          fin = list_valores_nivel[i] + 5;
          
          temp_list_nivel.push(list_valores_nivel[i]);
          
        }

        if (i == (list_valores_nivel.length - 1)) {
          
          data_grafica.push([temp_list_nivel[0] + " - " + temp_list_nivel[temp_list_nivel.length - 1], temp_list_nivel.length]);
        }
      }
      data.addRows(data_grafica);

      var options = {
        title: 'Rangos de Nivel',
        height: 500,
        legend: {
          alignment: 'center',
          position: 'top'
        }
      };
      chart().draw(data, options);
    }
    var chart = () => new google.visualization.PieChart(this.divPieChartNivel.nativeElement);
    var callback = () => func(chart);
    google.charts.setOnLoadCallback(callback);
  }


  getNivelAll() {
    this.nivelService.getNivelAll().subscribe(
      response => {
        this.loaderService.loadChartPackages(this.chartPackage).subscribe(() => {
          let list_nivel = response;
          google.charts.load('current', { packages: ['corechart'] });
          this.buildChart(list_nivel);
        });
      },
      error => {
        console.log(error);
      });
  }

}
