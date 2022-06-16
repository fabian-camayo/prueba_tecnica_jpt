import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Humedad } from 'src/app/models/humedad';
import { HumedadService } from "../../../services/humedad.service";
import { ScriptLoaderService, getPackageForChart, ChartType } from 'angular-google-charts';
declare var google: any;

@Component({
  selector: 'app-humedad-grafico-static',
  templateUrl: './humedad-grafico-static.component.html',
  styleUrls: ['./humedad-grafico-static.component.css']
})

export class HumedadGraficoStaticComponent implements OnInit {

  private readonly chartPackage = getPackageForChart(ChartType.PieChart);
  @ViewChild('divPieChartHumedad') divPieChartHumedad: ElementRef;
  constructor(private loaderService: ScriptLoaderService, public humedadService: HumedadService) {

  }
  ngOnInit(): void {
    this.getHumedadAll();
  }

  buildChart(list_humedad: Humedad[]) {
    var func = (chart: any) => {
      var data = new google.visualization.DataTable;
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');

      var list_valores_humedad: any = [];
      list_humedad.forEach(item => {
        list_valores_humedad.push(parseFloat(item.ENG.replace(',', '.')))
      });
      list_valores_humedad = list_valores_humedad.sort();
      let data_grafica: any = [];
      let temp_list_humedad: any = [];
      let fin = list_valores_humedad[0] + 5;
      temp_list_humedad.push(list_valores_humedad[0]);
      for (let i = 1; i <= list_valores_humedad.length - 1; i++) {
        if ((list_valores_humedad[i] >= (fin - 5)) && (list_valores_humedad[i] < fin)) {
          temp_list_humedad.push(list_valores_humedad[i]);
        } else {

          data_grafica.push([temp_list_humedad[0] + " - " + temp_list_humedad[temp_list_humedad.length - 1], temp_list_humedad.length]);
          temp_list_humedad = [];
          fin = list_valores_humedad[i] + 5;

          temp_list_humedad.push(list_valores_humedad[i]);

        }

        if (i == (list_valores_humedad.length - 1)) {

          data_grafica.push([temp_list_humedad[0] + " - " + temp_list_humedad[temp_list_humedad.length - 1], temp_list_humedad.length]);
        }
      }
      data.addRows(data_grafica);

      var options = {
        title: 'Rangos de Humedad',
        height: 500,
        legend: {
          alignment: 'center',
          position: 'top'
        }
      };
      chart().draw(data, options);
    }
    var chart = () => new google.visualization.PieChart(this.divPieChartHumedad.nativeElement);
    var callback = () => func(chart);
    google.charts.setOnLoadCallback(callback);
  }


  getHumedadAll() {
    this.humedadService.getHumedadAll().subscribe(
      response => {
        this.loaderService.loadChartPackages(this.chartPackage).subscribe(() => {
          let list_humedad = response;
          google.charts.load('current', { packages: ['corechart'] });
          this.buildChart(list_humedad);
        });
      },
      error => {
        console.log(error);
      });
  }

}
