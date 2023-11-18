import { Component } from '@angular/core';

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

  solucion = {
    solucion1: 0,
    solucion2: 0,
  };



  calcular() {
    let discriminante: number = Math.pow(this.coeficientes.grado1, 2) - 4 * this.coeficientes.grado2 * this.coeficientes.independiente;

    if (discriminante < 0) {
      this.advertencia = 'No existe solución real';
    } else {
      this.advertencia = 'Las soluciones son';
      let raizdiscriminante: number = Math.sqrt(discriminante);

      let solucion1 = (- this.coeficientes.grado1 + raizdiscriminante) / (2 * this.coeficientes.grado2);
      this.solucion.solucion1 = Number(solucion1.toFixed(2));

      let solucion2 = (- this.coeficientes.grado1 - raizdiscriminante) / (2 * this.coeficientes.grado2);
      this.solucion.solucion2 = Number(solucion2.toFixed(2));

    };

  }


}
