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

  habilitacionCuadro=false;
  usuRegistrado=false;
  textoDeRegistro="No hay nadie registrado"

getRegistroUsuario(){
  this.usuRegistrado=false;
}

setUsuarioRegistrado(event:Event){
  if((<HTMLInputElement>event.target).value=="si"){
    this.textoDeRegistro="El usuario se acaba de registrar";
  } else {
    this.textoDeRegistro="No hay nadie registrado";
  }
}

}
