import React,{useState,useEffect} from "react";

import { deletePaquete} from "../services/paquete";
import {getRepartidoresWPaquetes} from "../services/repartidor";
import Modal from "./modal";
import {useParams, Link } from "react-router-dom";
import { IPaquete } from "../interfaces/paquete";

const RepartidoresTable: React.FC = () => {

    const [repartidores, setPaquetes] = useState([]);
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
                setMessage("Repartidor eliminado con éxito!");
            }else{
                setMessage("Este repartidor tiene paquetes vinculados");
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
            getRepartidoresWPaquetes().then(r=>{                
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
                    { repartidores.map((data:any)=>(
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
                                >Eliminar</button>
                            </td>
                            <td>
                                <Link
                                type="button"
                                className="btn btn-info"
                                id={data._id}
                                to={`/repartidor/paquetes/${data._id}`}
                                >Ver</Link>
                            </td>
                    </tr>
                    ))}
                                    
                </tbody>
            </table>
        </div>

        
    );
}

export default RepartidoresTable;
