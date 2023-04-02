import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = 'Usuario registrado con exito';
  registrado=false;
  nombre ="";
  apellido ="";
  cargo:string="";
  entradas:Array<{titulo:string}>;

  constructor(){
    this.entradas=[
      {titulo:"Python, cada día más presente"},
      {titulo:"Java, presente desde hace más de 20 años"},
      {titulo:"JavaScript, cada vez más funcional"},
      {titulo:"Kotlin, potencia para tus apps"},
      {titulo:"¿Dónde quedó Pascal?"},
      
    ]
  }

  registrarUsuario(){
    this.registrado = true;
    //this.mensaje = "Usuario registrado con exito con el nombre de "+this.nombre+" "+this.apellido+" y tiene el cargo de " +this.cargo;
  }
}
