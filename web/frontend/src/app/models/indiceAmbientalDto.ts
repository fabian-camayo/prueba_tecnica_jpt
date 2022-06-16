export class IndiceAmbientalDto {
    constructor(humedad = 0.0, nivel = 0.0, temperatura = 0.0) {
      this.humedad = humedad;
      this.nivel = nivel;
      this.temperatura = temperatura;
    }
  
    humedad: Number;
    nivel: Number;
    temperatura: Number;
  }