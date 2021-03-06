import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import ClientesTable from "../components/clientes-table"

const Clientes: React.FC = () => {
    return(
        <div>
            <Header></Header>            

            <div className="container">
                <Subheader 
                    title="LISTA CLIENTES" 
                                        
                />
                <div className="row">
                    <ClientesTable/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Clientes;