import axios from "axios";

const query: string = "http://localhost:3001"

export function getPaquetes(): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/paquetes`)
        .then(result=>{        
            resolve(result);
        })
        //.catch(error => resolve([]));
    });
}

export function postPaquete(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/paquete`,data)
        .then(result => resolve(result) )
        //.catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function putPaquete(id:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/paquete/${id}`,data)
        .then(result => resolve(result) )
        //.catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function deletePaquete(id: string): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.delete(`${query}/paquete/${id}`)
        .then(result=>{        
            resolve(result.data);
        })
        //.catch(error => resolve({successed:false}));
    });
}

export function getPaquete(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/paquete/${id}`)
        .then(result => resolve(result) )
        //.catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getType(n:number): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/paquete/tipo_paquete/${n}`)
        .then(result => resolve(result) )
        //.catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getPaquetesRepartidor(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/repartidor/paquetes/${id}`)
        .then(result => resolve(result) )
        //.catch(error => resolve([]) );
    });
}

export function getPaquetesClientes(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/cliente/paquetes/${id}`)
        .then(result => resolve(result) )
        //.catch(error => resolve([]) );
    });
}

