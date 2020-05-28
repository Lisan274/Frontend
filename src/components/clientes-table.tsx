import React,{useState,useEffect} from "react";

import {getType, deletePaquete} from "../services/paquete";
import {getClientesWPaquetes} from "../services/cliente";
import Modal from "./modal";
import {useParams, Link } from "react-router-dom";
import { IPaquete } from "../interfaces/paquete";

const ClientesTable: React.FC = () => {

    const [clientes, setPaquetes] = useState([]);
    const [updatedPaquetes,setUpdatedPaquetes] = useState(false);
    const [paqueteId,setPaqueteId] = useState("");

    /* MODAL */
    const [showmodal,setShowmodal] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [message,setMessage] = useState("¿Quieres borrar?");
    const [completed,setCompleted] = useState(false);

     

    function hideModal(){
        setShowmodal(false);
    }

    function showModal(event:any){
        console.log(event.target);
        setPaqueteId(event.target.id);
        setShowmodal(true);
    }      

    function drop(){

      if(!completed){

        setSubmitting(true);
        setMessage("Sending...");

        deletePaquete(paqueteId).then(value=>{
            
            setCompleted(true);
            setSubmitting(false);
            if(value.successed){
                setMessage("Cliente eliminado con exito!");
            }else{
                setMessage("Este cliente tiene paquetes vinculados");
            }
        });

      }else{
        setUpdatedPaquetes(false);
        setCompleted(false);
        setMessage("¿Quieres borrar?");
        hideModal();
      }
      
    }

    /*********************** */

    useEffect(()=>{        
        if(!updatedPaquetes){
            getClientesWPaquetes().then(r=>{                
                setPaquetes(r);
                setUpdatedPaquetes(true); 
                              
            });            
        } 
    },[updatedPaquetes]);



    return(

        <div>
            <Modal
                title="Confirmation"
                description={message}
                lbl_main_btn="Ok"
                lbl_snd_btn="No"
                show={showmodal}
                closeModal={hideModal}
                accept={drop}
                submitting={submitting}
                completed={completed}
            />

            <table className="table">
                <thead className="thead-dark">
                <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Paquetes </th>
                        <th scope="col"></th> 
                        <th scope="col">  </th>            
                    </tr>
                </thead>
            
                <tbody>
                    { clientes.map((data:any)=>(
                        <tr key={data._id} >
                            <th scope="row">{data._id}</th>
                            <td>{data.name}</td>
                            <td>{data.l.length}</td>
                            <td>
                                <button 
                                type="button" 
                                className="btn btn-danger" 
                                onClick={showModal} 
                                id={data._id}
                                >Borrar</button>
                            </td>
                            <td>
                                <Link
                                type="button"
                                className="btn btn-info"
                                id={data._id}
                                to={`/cliente/paquetes/${data._id}`}
                                >Ver</Link>
                            </td>
                    </tr>
                    ))}
                                    
                </tbody>
            </table>
        </div>

        
    );
}

export default ClientesTable;
