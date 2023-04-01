import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  primerOperando = 0;
  segundoOperando = 0;
  resultado = 0;
  divisionProhibida = true;

  sumaOperandos(){
    this.resultado = this.primerOperando+this.segundoOperando
  }
  restaOperandos(){
    this.resultado = this.primerOperando-this.segundoOperando
  }
  multiplicaOperandos(){
    this.resultado = this.primerOperando*this.segundoOperando
  }
  divideOperandos(){
    this.resultado = this.primerOperando/this.segundoOperando
  }
  permitirDivision(event:Event){
   if (this.segundoOperando!=0){
    this.divisionProhibida=false
   } else {
    this.divisionProhibida=true
   }
  }

}
