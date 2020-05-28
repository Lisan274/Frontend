import {ITipoCliente} from "./tipoCliente";
import {IRepartidor} from "./repartidor";

export interface IPaquete{
    _id: string;
    name: string;
    peso: number;
    tipo_paquete: number;
    direccion: string;
    estado_envio: Boolean;
    costo: number;
    clienteEmisor: ITipoCliente[];
    clienteReceptor: ITipoCliente[];
    repartidor: IRepartidor[];
}