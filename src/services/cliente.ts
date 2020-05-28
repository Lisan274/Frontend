import axios from "axios";

const query: string = "http://localhost:3001"

export function getClientes(): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/clientes`)
        .then(result=>{        
            resolve(result.data);
        })
        //.catch(error => resolve([]));
    });
}

export function postCliente(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/cliente/Registro`,data)
        .then(result => resolve(result) )
        //.catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function putCliente(id:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/cliente/${id}`,data)
        .then(result => resolve(result) )
        //.catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function deleteCliente(id: string): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.delete(`${query}/cliente/${id}`)
        .then(result=>{        
            resolve(result.data);
        })
        //.catch(error => resolve({successed:false}));
    });
}

export function getCliente(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/cliente/${id}`)
        .then(result => resolve(result) )
        //.catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function postLoginCliente(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/cliente/Login`,data)
        .then(result => resolve(result) )
        //.catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getClientesWPaquetes(): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/clientes/paquetes`)
        .then(result=>{        
            resolve(result.data);
        })
        //.catch(error => resolve([]));
    });
}