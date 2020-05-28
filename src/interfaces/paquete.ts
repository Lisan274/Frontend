import {IRepartidor} from "./repartidor"
import { ICliente } from "./cliente";
import { ITipoCliente } from "./tipoCliente";

export interface IPaquete { 
    _id: string;
    name: string;
    peso: number;
    tipo_paquete: number;
    estado_envio: Boolean;
    clienteEmisor: ICliente[];
    clienteReceptor: ICliente[];
    repartidor: IRepartidor[];
}