import { Component } from '@angular/core';
import { Calculadora } from '../calculadora';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ej1.Calculadora';

  operando1?: String;
  operando2?: String;
  resultado?: Number;
  alertaOK?: String | null;
  alertaKO?: String | null;

  sumar() : void{
    if(this.operando1 === undefined || this.operando2 === undefined || this.operando1 == '' || this.operando2 == ''){
      this.alertaKO = 'Tiene que rellenar los campos.';
      this.alertaOK = null;
    }else{
      this.resultado = Number(this.operando1) + Number(this.operando2);
      this.alertaOK = 'Operación realizada.';
      this.alertaKO = null;
    }
  }

  restar() : void{
    if(this.operando1 === undefined || this.operando2 === undefined || this.operando1 == '' || this.operando2 == ''){
      this.alertaKO = 'Tiene que rellenar los campos.';
      this.alertaOK = null;
    }else{
      this.resultado = Number(this.operando1) - Number(this.operando2);
      this.alertaOK = 'Operación realizada.';
      this.alertaKO = null;
    }
  }

  multiplicar() : void{
    if(this.operando1 === undefined || this.operando2 === undefined || this.operando1 == '' || this.operando2 == ''){
      this.alertaKO = 'Tiene que rellenar los campos.';
      this.alertaOK = null;
    }else{
      this.resultado = Number(this.operando1) * Number(this.operando2);
      this.alertaOK = 'Operación realizada.';
      this.alertaKO = null;
    }
  }

  dividir() : void{
    if(this.operando1 === undefined || this.operando2 === undefined || this.operando1 == '' || this.operando2 == ''){
      this.alertaKO = 'Tiene que rellenar los campos.';
      this.alertaOK = null;
    }else{
      this.resultado = Number(this.operando1) / Number(this.operando2);
      this.alertaOK = 'Operación realizada.';
      this.alertaKO = null;
    }
  }

}
