import React, { useState, useEffect } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import Card from "../components/card";

import { IPaquete } from "../interfaces/paquete";

import { getPaquetes } from "../services/paquete";
import { useParams } from "react-router-dom";

import { getPaquetesClientes } from "../services/paquete"

const Languagecategories: React.FC = () => {

    const [languages, setLanguages] = useState([]);
    const [update, setUpdate] = useState(true);
    const [categoria, setCategoria] = useState(" ");
    const { _id } = useParams();

    useEffect(() => {
        if (update) {
            if (_id != undefined) {
                getPaquetesClientes(_id).then(r => {
                    setUpdate(false);
                    setLanguages(r.data);
                    setCategoria(r.data.category[0].name);
                });
            } else {
                getPaquetes().then(r => {
                    setUpdate(false);
                    setLanguages(r.data);
                    setCategoria(r.data.name);
                });
            }
        }
    }, [update, categoria, _id]);

    useEffect(() => {
        return () => {
            console.log("cleaned up");
        };
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="container">
                <Subheader title={categoria} ></Subheader>
                <div className="row text-center">
                    {languages.map((paq: IPaquete, index) => (
                       <Card
                            
                            title={paq.name}
                            description={paq.direccion}
                            key={paq._id}
                            category={paq.clienteEmisor[0].clienteEmisor.name}
                            LanguageId={paq._id}
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

}

export default Languagecategories;