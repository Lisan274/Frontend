import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom"; 

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import Card from "../components/card-2";

import {IPaquete} from "../interfaces/paquete";


import {getPaquetesClientes, getPaquetesRepartidor, getType, getPaquetes} from "../services/paquete"; 

const Paquete: React.FC = () => { 

    const [paquetes,setPaquetes] = useState([]);
    const [update,setUpdate] = useState(true);
    const [cat, setCat] = useState(""); 
    const {id} = useParams(); 
    const {person} = useParams(); 
    const {n} = useParams(); 

    useEffect(()=>{
        if(update){
            if (n){
                getType(n).then( r=>{                
                    setUpdate(true);
                    setPaquetes(r.data);
                    if (n===1){
                    setCat("PAQUETERIA NORMAL");
                }else if (n===2){
                    setCat("PAQUETERIA FRAGIL");
                }else if (n===3){
                    setCat("ENTREGA RAPIDA");
                }
                });
            }else if (person === "cliente"){
                getPaquetesClientes(id).then( r=>{                
                    setUpdate(false);
                    setPaquetes(r.data);
                    setCat("HISTORIAL PAQUETES CLIENTE");
                });
            }else if (person === "repartidor"){
                getPaquetesRepartidor(id).then( r=>{                
                    setUpdate(false);
                    setPaquetes(r.data);
                    setCat("HISTORIAL PAQUETES REPARTIDOR");
                });
            }
            else{
                getPaquetes().then( r=>{                
                    setUpdate(false);
                    setPaquetes(r.data);
                    setCat("TODOS LOS PAQUETES");
                });
            }
        }      
    },[update, id, person, n]);

    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);

    return(
        <div>
            <Header></Header>
            <div className="container">
                <Subheader title={cat} ></Subheader>
                <div className="row text-center">
                {person === "cliente" &&
                        <Card
                            title="<New package here>" 
                            description="Click the button to create a new package"
                            tipo_paquete=""
                            key="0" 
                            clienteE=""
                            clienteR=""
                            btn_label="New One"
                        />
                    }
                    {paquetes.map((paq: IPaquete, index) => (
                        <Card 
                            title={paq.name} 
                            tipo_paquete={paq.tipo_paquete}
                            description={paq.peso}
                            key={paq._id}
                            clienteE={paq.clienteEmisor[0].name}
                            clienteR= {paq.clienteReceptor[0].name}
                            paqueteId={paq._id}
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

}

export default Paquete;