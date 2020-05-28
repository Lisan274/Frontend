import React,{useState,useEffect} from "react";

import {deletePaquete} from "../services/paquete";
import Modal from "./modal";
import { Link } from "react-router-dom";
import { IPaquete } from "../interfaces/paquete";

const TipoPaquetesTable: React.FC = () => {

    const [paquete, setPaquetes] = useState([]);
    const [updatedPaquetes,setUpdatedPaquetes] = useState(false);
    const [paqueteId,setPaqueteId] = useState("");

    /* MODAL */
    const [showmodal,setShowmodal] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [message,setMessage] = useState("Do you want to delete?");
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
                setMessage("Category deleted successfuly!");
            }else{
                setMessage("This category has languages linked, drop these ones before drop this!");
            }
        });

      }else{
        setUpdatedPaquetes(false);
        setCompleted(false);
        setMessage("Do you want to delete?");
        hideModal();
      }
      
    }

    /*********************** */



   /* useEffect(()=>{        
        if(!updatedPaquetes){
            getTipoPaquete().then(r=>{                
                setPaquetes(r);
                setUpdatedPaquetes(true); 
                              
            });            
        } 
    },[updatedPaquetes]); */



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
                        <th scope="col">Id Paquete</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Tipo de Paquete</th>
                        <th scope="col">Costo de Paquete</th>
                        <th scope="col">Destinatario</th>
                        <th scope="col"></th>
                        <th scope="col"></th>                
                    </tr>
                </thead>
                <tbody>
                    {paquete.map((data:any)=>(
                        <tr key={data._id} >
                            <th scope="row">{data._id}</th>
                            <td>{data.Peso}</td>
                            <td>{data.tipo_paquete}</td>
                            <td>{data.peso}</td>
                            <td>{data.costo}</td>
                            <td>{data.clienteReceptor}</td>
                            <td>
                                <button 
                                type="button" 
                                className="btn btn-danger" 
                                onClick={showModal} 
                                id={data._id}
                                >Delete</button>
                            </td>
                            <td>
                                <Link
                                type="button"
                                className="btn btn-info"
                                id={data._id}
                                to={`/categories/${data._id}`}
                                >Edit</Link>
                            </td>
                    </tr>
                    ))}
                                    
                </tbody>
            </table>
        </div>

        
    );
}

export default TipoPaquetesTable;