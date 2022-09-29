import { Timestamp } from "rxjs";

export interface LogFis{
    idArea?: number,
    idServicio?: number,
    fecha?: string,
    condicionServicio: string,
    nroEvento: string,
    tipoEvento?: string,
    condicion?: string,
    resultado?: string,
    responsable?: string
  }