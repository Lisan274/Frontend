import React,{useState,useEffect} from "react";

import Modal from "./modal";
import {getClientes} from "../services/cliente";
import {postPaquete,getPaquete,putPaquete} from "../services/paquete";
import {ICliente} from "../interfaces/cliente";
import {IPaquete} from "../interfaces/paquete";

import {useParams} from "react-router-dom";

import useFormHelper from "../helpers/useFormHelper";

const PaqueteForm:React.FC = () => {
    const [cliente,setCliente] = useState([]);
    const [cleanUp,setCleanUp] = useState(true);
    
    /* MODAL */
    const [showmodal,setShowmodal] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [message,setMessage] = useState("Quieres guardar los cambios?");
    const [completed,setCompleted] = useState(false);
     

    function hideModal(){
      setShowmodal(false);
    }

    function showModal(){
      setShowmodal(true);
    }      

    function savePaquete(){

      if(!completed){
        setSubmitting(true);
        setMessage("Enviando...");

        if(id){
          putPaquete(id,values).then(value=>{
            setCompleted(true);
            setSubmitting(false);
            if(value.data.successed){
              setMessage("Paquete actualizado con exito!");          
            }else{
              setMessage("Este nombre ya existe!");
            }
          })
        }else{
          postPaquete(values).then(value=>{
            setCompleted(true);
            setSubmitting(false);
            if(value.data.successed){
              setMessage("Paquete creado con exito!");          
            }else{
              setMessage("Este nombre ya existe!");
            }
          })
        }
      }else{
        setCompleted(false);
        setMessage("Quieres guardar los cambios?");
        hideModal();
      }
      
    }

    /*********************** */

    const {id} = useParams();
     
    const states = useState({
      name: "",
      peso: "",
      tipo_paquete: "",
      clienteEmisor: "",
      clienteReceptor: ""
    });      

    const {
      values,      
      handleChange,
      updateValues      
    } = useFormHelper(states);

    useEffect(()=>{
      if(id && cleanUp){
        setCleanUp(false);
        getPaquete(id).then(value=>{
          updateValues({
            name: value.data.name,
            peso: value.data.peso,
            tipo_paquete: value.data.tipo_paquete,
            clienteEmisor: value.data.clienteEmisor,
            clienteReceptor: value.data.clienteReceptor
          });          
        })
      }
    },[id,updateValues,cleanUp])

    useEffect(()=>{
      getClientes().then(c => {
        setCliente(c);
      });
    },[]);

    useEffect(() => {
      return () => {
        console.log("cleaned up");
      };
    }, []);
  

    return(
    <div>

        <Modal
          title="Confirmation"
          description={message}
          lbl_main_btn="Ok"
          lbl_snd_btn="No"
          show={showmodal}
          closeModal={hideModal}
          accept={savePaquete}
          submitting={submitting}
          completed={completed}
        />

        <form className="align-items-center" >
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Nombre del Paquete</label>
          <input 
            type="text" 
            className="form-control" 
            id="formGroupExampleInput"
            onChange={handleChange}
            name="name"
            defaultValue={values.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Peso</label>
          <input 
            type="text" 
            className="form-control" 
            id="formGroupExampleInput"
            onChange={handleChange}
            name="name"
            defaultValue={values.peso}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Tipo Paquete</label>
          <input 
            type="text" 
            className="form-control" 
            id="formGroupExampleInput"
            onChange={handleChange}
            name="name"
            defaultValue={values.tipo_paquete}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">clienteEmisor</label>
          <select 
            className="form-control" 
            id="exampleFormControlSelect1"
            onChange={handleChange}
            name="clienteEmisor"
            value={values.clienteEmisor}
          >
            <option value="">Cliente que enviara el paquete</option>
            {cliente.map( (cliente:ICliente) => (
              <option value={cliente.name} key={cliente.name} >{cliente.name}</option>
            ) )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">clienteReceptor</label>
          <select 
            className="form-control" 
            id="exampleFormControlSelect1"
            onChange={handleChange}
            name="clienteReceptor"
            value={values.clienteReceptor}
          >
            <option value="">Cliente que recibira el paquete</option>
            {cliente.map( (cliente:ICliente) => (
              <option value={cliente.name} key={cliente.name} >{cliente.name}</option>
            ) )}
          </select>
        </div>
       
    </form> 
    <button className="btn btn-primary" onClick={showModal} >Submit</button>
    </div>
    

    );
}

export default PaqueteForm;

