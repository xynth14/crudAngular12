import { Injectable } from '@angular/core';

//comunicar con nuestra api para enviar informacion
import { HttpClient } from '@angular/common/http';
//monitorea lo que sucede con la informacion y con el entornoo html
import { Observable } from 'rxjs';
//modelo empleados porque tiene la estructura de los datos a enviar
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

	API: string="https://facyna.com/empleadosAngular12/"; //api de php CRUD

  constructor(private clienteHttp:HttpClient) { }

	AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
		return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);
	}

	ObtenerEmpleados(){
		return this.clienteHttp.get(this.API);
	}

	BorrarEmpleado(id:any):Observable<any>{
		return this.clienteHttp.get(this.API+"?borrar="+id);
	}

	ObtenerEmpleado(id:any):Observable<any>{
		return this.clienteHttp.get(this.API+"?consultar="+id);
	}

	EditarEmpleado(id:any, datosEmpleado:Empleado):Observable<any>{
		return this.clienteHttp.post(this.API+"?actualizar="+id,datosEmpleado);
	}

}
