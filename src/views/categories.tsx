import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import TipoPaquetesTable from "../components/tipo-paquetes-table"
import { ICliente } from "../interfaces/cliente"
const Categories: React.FC = () => {
    return(
        <div>
            <Header></Header>            

            <div className="container">
                <Subheader 
                    title="Category Management"                     
                />
                <div className="row">
                    <TipoPaquetesTable/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Categories;