import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import { ICliente } from "../interfaces/cliente"
const Index: React.FC = () => {
    return (
        <div>
            <Header></Header>

            <div className="container">
                <hr/>
                <div >
                    <form className="form-center">
                        <input className="form-control" type="text" placeholder="Ingrese Id de Paquete" ></input>
                        <button className="btn btn-outline-success my-2 my-sm-0, col text-center"  type="submit">Search</button>
                     </form>


                </div>
                <hr/>
                
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Index;