import React,{useState,useEffect} from "react";

import { deleteRepartidor} from "../services/repartidor";
import {getRepartidoresWPaquetes} from "../services/repartidor";
import Modal from "./modal";
import { Link } from "react-router-dom";

const RepartidoresTable: React.FC = () => {

    const [repartidores, setRepartidores] = useState([]);
    const [updatedPaquetes,setUpdatedPaquetes] = useState(false);
    const [repartidorId,setRepartidorId] = useState("");

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
        setRepartidorId(event.target.id);
        setShowmodal(true);
    }      

    function drop(){

      if(!completed){

        setSubmitting(true);
        setMessage("Sending...");

        deleteRepartidor(repartidorId).then(value=>{
            
            setCompleted(true);
            setSubmitting(false);
            if(value.successed){
                setMessage("Este repartidor tiene paquetes vinculados");
            }else{
                setMessage("Repartidor eliminado con exito!");
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
                setRepartidores(r);
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
