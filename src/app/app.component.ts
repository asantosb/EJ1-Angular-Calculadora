import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ej1.Calculadora';

  operando1?: Number;
  operando2?: Number;
  resultado?: Number;

  sumar() : void{
    this.resultado = Number(this.operando1) + Number(this.operando2);
  }

  restar() : void{
    this.resultado = Number(this.operando1) - Number(this.operando2);
  }

  multiplicar() : void{
    this.resultado = Number(this.operando1) * Number(this.operando2);
  }

  dividir() : void{
    this.resultado = Number(this.operando1) / Number(this.operando2);
  }

}
