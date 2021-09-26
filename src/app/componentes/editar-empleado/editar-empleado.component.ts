import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

	//llegan todos los datos del formulario
	formularioDeEmpleado:FormGroup;

	elID: any;

  constructor(
		private ativeRoute:ActivatedRoute,
		private crudService:CrudService,
		public formulario:FormBuilder,
		private ruteador:Router
	) { 
		this.elID=this.ativeRoute.snapshot.paramMap.get('id');
		console.log(this.elID);

		this.crudService.ObtenerEmpleado(this.elID).subscribe(
			respuesta=>{
				console.log(respuesta);
				this.formularioDeEmpleado.setValue({
					nombre:respuesta[0]['nombre'],
					correo:respuesta[0]['correo']
				});
			}
		);
		this.formularioDeEmpleado=this.formulario.group(
			{
			nombre:[''],
			correo:['']
			}
		);
	}

  ngOnInit(): void {
  }

	enviarDatos():any{
		console.log(this.elID);
		console.log(this.formularioDeEmpleado.value);

		this.crudService.EditarEmpleado(this.elID, this.formularioDeEmpleado.value).subscribe(()=>{
			this.ruteador.navigateByUrl('/listar-empleado');
		});
		
	}

}
