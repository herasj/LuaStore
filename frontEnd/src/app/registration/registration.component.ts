import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  nombre;
  apellidos;
  email;
  contrasena;
  direccion;
  telefono;
  fecha;
  id= 43;

  err: boolean = false;
  erra: boolean = false;
  accept: boolean = false;

  constructor(private _http: HttpService, private router: Router) { }

  ngOnInit() {
  }

  register(){
    if(this.nombre!=null&&this.email!=null&&this.accept){
      var js={
        name:this.nombre,
        lastname:this.apellidos,
        date:this.fecha,
        phone:this.telefono,
        address:this.direccion,
        email:this.email,
        pass:this.contrasena,
      };
      this.router.navigate(['']);
      localStorage.setItem('userInfo', JSON.stringify(js))
    }else{
      if(!this.accept){
        this.erra=true;
        this.err=false;
      }
      else{
        this.erra=false;
        this.err=true;
      }
        
    }
  }
}
