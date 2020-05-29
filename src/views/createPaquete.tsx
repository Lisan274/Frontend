import React,{useState,useEffect} from "react";

import {useParams,Redirect} from "react-router-dom";

import Modal from "../components/modal";
import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import PaqueteForm from "../components/paquete-form";

import {deletePaquete} from "../services/paquete";

const CreatePaquete: React.FC = () => {     
    const [needAction,setNeedAction] = useState(false);
    const [back,setBack] = useState(false);
    const [deleted,setDeleted] = useState(false);
    const {id} = useParams();

    /*Modal stages*/ 
    const [showmodal,setShowmodal] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [message,setMessage] = useState("Do you want to delete?");
    const [completed,setCompleted] = useState(false);
    
    

    function hideModal(){
        setShowmodal(false);
    }
  
    function showModal(){
        setShowmodal(true);
    }

    function dropPaquete(){
        if(!completed){
            setSubmitting(true);
            setMessage("Sending...");
            deletePaquete(id).then(value=>{
              setCompleted(true);
              setSubmitting(false);
              if(value.data.successed){
                setMessage(value.data.message);
                setDeleted(true);
              }else{
                setMessage("We got a server error!");
              }
            })
          }else{
            setCompleted(false);
            setMessage("Do you want to delete?");
            hideModal();
            if(deleted){
                setBack(true);
            }
          }
    }
    /*-----------------------------------------*/

    

    useEffect(()=>{
        if(id){
            setNeedAction(true);
        }
    },[id]);

    if(back){
        return(
            <Redirect
                to="/clientes/paquetes/:id"
            />
        );
    }else{

        return(
            <div>
                <Header></Header>

                <Modal
                    title="Confirmation"
                    description={message}
                    lbl_main_btn="Ok"
                    lbl_snd_btn="No"
                    show={showmodal}
                    closeModal={hideModal}
                    accept={dropPaquete} //// It should change based on view logic
                    submitting={submitting}
                    completed={completed}
                />

                <div className="container">
                    <Subheader 
                        title="PAQUETE" 
                        deletebtn={needAction}
                        fncbtn={showModal}
                    />
                    <div className="row">
                        <PaqueteForm/>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default CreatePaquete;

