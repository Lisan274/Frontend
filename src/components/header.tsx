import React from "react";
import {Link} from "react-router-dom";

const Header: React.FC = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
        <Link className="nav-link" to="/paquetes" >Paquetes</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/repartidores/paquetes">Repartidores
                    <span className="sr-only">(current)</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/clientes/paquetes" >Clientes</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/paquete/tipo_paquete/1" >Paquetería Normal</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/paquete/tipo_paquete/2" >Paquetería Fragil</Link>
            </li>  
            <li className="nav-item">
                <Link className="nav-link" to="/paquete/tipo_paquete/3" >Entrega Rapida</Link>
            </li>                 
            </ul>
        </div>
        </div>
    </nav>
);

export default Header