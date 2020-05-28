import React from "react";
import {Link} from "react-router-dom";


interface ICardProps{
    title: string,
    description: any,
    tipo_paquete: any,
    clienteE: string;
    clienteR: string;
    btn_label?: string
    paqueteId?: string
}

const Card:React.FC<ICardProps> = ({title, description,tipo_paquete, clienteE, clienteR, btn_label, paqueteId}) => {

    return(
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                <div className="card-header">
                    {clienteE}
                </div>      
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{tipo_paquete}</p>
                    <p className="card-text">{clienteR}</p>
                </div>
                <div className="card-footer">
                    { btn_label ? (
                        <Link to="/paquete/new">{btn_label}</Link>
                    ) : (
                        <Link to={`/paquete/${paqueteId}/edit`}>Edit</Link>
                    ) }
                    
                </div>
            </div>
        </div>
    )

}

export default Card;