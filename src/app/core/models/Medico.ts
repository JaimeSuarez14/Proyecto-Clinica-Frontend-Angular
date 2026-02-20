export interface MedicoVMR {
  id: number;
  cedula: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  esEspecialista: boolean;
  habilitado: boolean;
}

export interface ResponseMedicos {
  codigo: number,
  datos :{
    cantidad:number,
    elementos : MedicoVMR[]
  },
  mensajes: string[]

}
