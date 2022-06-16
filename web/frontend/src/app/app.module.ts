import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { GoogleChartsModule } from 'angular-google-charts';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HumedadComponent } from './components/humedad/humedad.component';
import { NivelComponent } from './components/nivel/nivel.component';
import { TemperaturaComponent } from './components/temperatura/temperatura.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { IndiceAmbientalComponent } from './components/indice-ambiental/indice-ambiental.component';
import { Error404Component } from './components/error404/error404.component';
import { HumedadAllComponent } from './components/humedad/humedad-all/humedad-all.component';
import { NivelAllComponent } from './components/nivel/nivel-all/nivel-all.component';
import { TemperaturaAllComponent } from './components/temperatura/temperatura-all/temperatura-all.component';
import { HumedadGraficoRefreshComponent } from './components/humedad/humedad-grafico-refresh/humedad-grafico-refresh.component';
import { HumedadGraficoStaticComponent } from './components/humedad/humedad-grafico-static/humedad-grafico-static.component';
import { NivelGraficoRefreshComponent } from './components/nivel/nivel-grafico-refresh/nivel-grafico-refresh.component';
import { NivelGraficoStaticComponent } from './components/nivel/nivel-grafico-static/nivel-grafico-static.component';
import { TemperaturaGraficoRefreshComponent } from './components/temperatura/temperatura-grafico-refresh/temperatura-grafico-refresh.component';
import { TemperaturaGraficoStaticComponent } from './components/temperatura/temperatura-grafico-static/temperatura-grafico-static.component';
import { IndiceAmbientalCreateComponent } from './components/indice-ambiental/indice-ambiental-create/indice-ambiental-create.component';
import { IndiceAmbientalAllComponent } from './components/indice-ambiental/indice-ambiental-all/indice-ambiental-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HumedadComponent,
    NivelComponent,
    TemperaturaComponent,
    RegistrosComponent,
    GraficasComponent,
    IndiceAmbientalComponent,
    Error404Component,
    HumedadAllComponent,
    NivelAllComponent,
    TemperaturaAllComponent,
    HumedadGraficoRefreshComponent,
    HumedadGraficoStaticComponent,
    NivelGraficoRefreshComponent,
    NivelGraficoStaticComponent,
    TemperaturaGraficoRefreshComponent,
    TemperaturaGraficoStaticComponent,
    IndiceAmbientalCreateComponent,
    IndiceAmbientalAllComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    GoogleChartsModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component:RegistrosComponent},
      {path: 'graficas', component:GraficasComponent},
      {path: 'indice-ambiental', component:IndiceAmbientalComponent},
      {path: '**', component:Error404Component},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
