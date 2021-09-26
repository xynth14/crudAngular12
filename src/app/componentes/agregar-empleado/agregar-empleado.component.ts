import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/servicio/crud.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

	//llegan todos los datos del formulario
	formularioDeEmpleado:FormGroup;
	
	//recibimostodos los datos formados dentro de un group
  constructor( 
		public formulario:FormBuilder,
		private crudService:CrudService,
		private ruteador:Router
		) { 

		this.formularioDeEmpleado = this.formulario.group({
			nombre:[''],
			correo:['']
		});

	}

  ngOnInit(): void {
  }

	enviarDatos(): any{
		console.log("me presionaste");
		console.log(this.formularioDeEmpleado.value);
		
		this.crudService.AgregarEmpleado(this.formularioDeEmpleado.value).subscribe(respuesta=>{
			this.ruteador.navigateByUrl('/listar-empleado');
		});		
	}

}
