import { Component } from '@angular/core';
class Solucion {
  solucion1: number = 0;
  solucion2: number = 0;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ecuacion2G';

  coeficientes = {
    grado2: 0,
    grado1: 0,
    independiente: 0,
  };


  advertencia: string = '¿Que ecuación deseas resolver?'

  solucion: Solucion = {
    solucion1: 0,
    solucion2: 0,
  };

  discriminante: number = 0;


  calcular() {
    this.discriminante = Math.pow(this.coeficientes.grado1, 2) - 4 * this.coeficientes.grado2 * this.coeficientes.independiente;

    if (this.discriminante < 0) {
      this.advertencia = 'No existe solución real';
      this.solucion.solucion1 = 0;
      this.solucion.solucion2 = 0;


    } else {
      this.advertencia = 'Las soluciones son';
      let raizdiscriminante: number = Math.sqrt(this.discriminante);

      let solucion1 = (- this.coeficientes.grado1 + raizdiscriminante) / (2 * this.coeficientes.grado2);
      this.solucion.solucion1 = Number(solucion1.toFixed(2));

      let solucion2 = (- this.coeficientes.grado1 - raizdiscriminante) / (2 * this.coeficientes.grado2);
      this.solucion.solucion2 = Number(solucion2.toFixed(2));

    };

  }


}
