import {ICliente} from "./cliente"

export interface ITipoCliente{
    clienteEmisor: ICliente;
    clienteReceptor: ICliente;
}