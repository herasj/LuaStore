import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  nombre;
  email;
  contraseña;
  direccion;
  telefono;
  id= 43;
  constructor() { }

  ngOnInit() {
  }

  register(){
    if(this.nombre!=null&&this.email!=null){
      
    }
  }
}
