import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aquí iría un empleado.</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red}"]
})
export class EmpleadoComponent {
  nombre ="Juan";
  apellido="Diaz";
  edad=18;
  //empresa="Pildoras informaticas";
/** 
  getEdad(){
    return this.edad;
  }
*/


}
