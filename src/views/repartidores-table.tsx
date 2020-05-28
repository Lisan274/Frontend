import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import RepartidoresTable from "../components/repartidores-table"

const Repartidores: React.FC = () => {
    return(
        <div>
            <Header></Header>            

            <div className="container">
                <Subheader 
                    title="LISTA REPARTIDORES"                  
                />
                <div className="row">
                    <RepartidoresTable/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Repartidores;