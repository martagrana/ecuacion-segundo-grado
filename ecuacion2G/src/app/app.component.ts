import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecuacion2G';

  coeficientes = {
    grado2: 0,
    grado1: 0,
    independiente: 0,
  };

  discriminante: number = 0;
  raizdiscriminante: number = 0;
  advertencia: string = '¿Que ecuación deseas resolver?'

  solucion = {
    solucion1: 0,
    solucion2: 0,
  };



  calcular() {

    this.discriminante = this.coeficientes.grado1 ** 2 - 4 * this.coeficientes.grado2 * this.coeficientes.independiente;
    this.raizdiscriminante = Math.sqrt(this.discriminante);

    if (this.discriminante < 0) {
      this.advertencia = 'no existe solución real';
    } else {
      this.advertencia = 'Las soluciones son';
      this.solucion.solucion1 = (- this.coeficientes.grado1 + this.raizdiscriminante) / 2 * this.coeficientes.grado2;
      this.solucion.solucion1 = Number(this.solucion.solucion1.toFixed(2));
      this.solucion.solucion2 = (- this.coeficientes.grado1 - this.raizdiscriminante) / 2 * this.coeficientes.grado2;
      this.solucion.solucion2 = Number(this.solucion.solucion2.toFixed(2));

    };

  }


}
